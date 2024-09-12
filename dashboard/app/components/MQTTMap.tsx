'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { ref, onValue } from 'firebase/database';
import { database } from '../utils/firebaseConfig';

const MQTTMap = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const maxX = 3; 
    const maxY = 2;
    const canvasWidth = 600;
    const canvasHeight = 400; 
    const yAdjustFactor = 1;

    useEffect(() => {
        const positionRef = ref(database, 'coordinates');

        const unsubscribe = onValue(positionRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);

            if (data) {
                // const { id, x, y } = data;
                let { x, y } = data;
                y = y - yAdjustFactor;

                let scaledX = (x / maxX) * canvasWidth;
                let scaledY = (y / maxY) * canvasHeight;

                scaledX = Math.max(0, Math.min(scaledX, canvasWidth));
                scaledY = Math.max(0, Math.min(scaledY, canvasHeight));

                const canvas = canvasRef.current;
                if (canvas) {
                    const ctx = canvas.getContext('2d');

                    if (ctx) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        ctx.beginPath();
                        ctx.arc(scaledX, scaledY, 10, 0, 2 * Math.PI);
                        ctx.fillStyle = 'blue';
                        ctx.fill();

                        let legendX = scaledX + 12;
                        let legendY = scaledY - 12;

                        const legendWidth = ctx.measureText(`x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`).width;

                        if (legendX + legendWidth > canvasWidth) {
                            legendX = scaledX - legendWidth - 12;
                        }
                        else if (legendY < 0) {
                            legendY = scaledY + 24;
                        }

                        ctx.fillStyle = 'black';
                        ctx.font = '12px Arial';
                        ctx.fillText(`x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`, legendX, legendY);
                        // ctx.fillText(`ID: ${id}`, x + 12, y - 12);
                    }
                }
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Box>
            <Typography variant="h5">Mapa RTLS</Typography>
            <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ border: '1px solid black' }} />
        </Box>
    );
};

export default MQTTMap;
