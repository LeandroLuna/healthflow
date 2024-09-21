'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { ref, onValue } from 'firebase/database';
import { database } from '../utils/firebaseConfig';

interface MQTTMapProps {
  onNurseCountChange?: (count: number) => void;
}

const MQTTMap: React.FC<MQTTMapProps> = ({ onNurseCountChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nurseIds, setNurseIds] = useState<string[]>([]);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const maxX = 5.7;
  const maxY = 11;

  useEffect(() => {
    const img = new Image();
    img.src = '/assets/classroom_map.jpg';
    img.onload = () => {
      setImage(img);
      setImageLoaded(true);

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
      }
    };

    return () => {
      setImageLoaded(false);
    };
  }, []);

  useEffect(() => {
    const positionRef = ref(database, 'coordinates');

    const unsubscribe = onValue(positionRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        let { id, x, y } = data;
        id = 1;
        console.log(x, y);

        if (id && !nurseIds.includes(id)) {
          setNurseIds((prevIds) => {
            const updatedIds = [...prevIds, id];
            if (onNurseCountChange) {
              onNurseCountChange(updatedIds.length);
            }
            return updatedIds;
          });
        }

        const canvas = canvasRef.current;
        if (canvas && imageLoaded && image) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            let scaledX = (x / maxX) * canvas.width;
            let scaledY = (y / maxY) * canvas.height;

            scaledX = Math.max(0, Math.min(scaledX, canvas.width));
            scaledY = Math.max(0, Math.min(scaledY, canvas.height));

            ctx.beginPath();
            ctx.arc(scaledX, scaledY, 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();

            let legendX = scaledX + 12;
            let legendY = scaledY - 12;

            const legendWidth = ctx.measureText(`ID: ${id}, x: ${x.toFixed(2)}, y: ${scaledY.toFixed(2)}`).width;

            if (legendX + legendWidth > canvas.width) {
              legendX = scaledX - legendWidth - 12;
            } else if (legendY < 0) {
              legendY = scaledY + 24;
            }

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(`ID: ${id}, x: ${scaledX.toFixed(2)}, y: ${scaledY.toFixed(2)}`, legendX, legendY);
          }
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [nurseIds, onNurseCountChange, imageLoaded, image]);

  return (

    <Stack sx={{
      justifyContent: "space-around",
      alignItems: "center",
    }}>
      <Typography variant="h6" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase' }} >Localização em tempo real</Typography>
      <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
    </Stack>

  );
};

export default MQTTMap;
