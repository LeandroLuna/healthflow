'use client';

import React, { useEffect, useRef } from 'react';
import mqtt from 'mqtt';
import { Box, Typography } from '@mui/material';

const MQTTMap = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const client = mqtt.connect('wss://mqtt-dashboard.com:8884/mqtt');

        client.on('connect', () => {
            console.log('Conectado ao broker MQTT');
            client.subscribe('medical_staff/position');
        });

        client.on('message', (_topic: any, message: any) => {
            const data = JSON.parse(message.toString());
            console.log(data);
            const { id, x, y } = data;

            const canvas = canvasRef.current;
            
            if (canvas){
                const ctx = canvas.getContext('2d');

                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
        
                    ctx.beginPath();
                    ctx.arc(x, y, 10, 0, 2 * Math.PI);
                    ctx.fillStyle = 'blue';
                    ctx.fill();
        
                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.fillText(`ID: ${id}`, x + 12, y - 12);
                }
            }
        });

        return () => {
            client.end();
        };
    }, []);

    return (
        <Box>
            <Typography variant="h5">Mapa RTLS</Typography>
            <canvas ref={canvasRef} width={600} height={400} style={{ border: '1px solid black' }} />
        </Box>
    );
};

export default MQTTMap;