'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

interface PeopleCounterProps {
  onCountChange?: (count: number) => void;
  showCounter: boolean;
}

const PeopleCounter: React.FC<PeopleCounterProps> = ({ onCountChange, showCounter }) => {
  const [count, setCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initializeTensorFlow = async () => {
    await tf.setBackend('webgl');
    await tf.ready();
  };

  const setupCamera = async () => {
    const video = videoRef.current;

    if (video) {
      video.width = 640;
      video.height = 480;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        return new Promise<void>((resolve, reject) => {
          video.onloadeddata = () => {
            video.play();
            resolve();
          };
          video.onerror = (e) => {
            console.error('Video error', e);
            reject(e);
          };
        });
      } catch (error) {
        console.error('Error accessing camera', error);
      }
    } else {
      console.error('Video element is null');
    }
  };

  const detectObjects = async () => {
    await initializeTensorFlow();
    const model = await cocoSsd.load();

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (canvas && video) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const detect = async () => {
          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const predictions = await model.detect(video);
            let personCount = 0;

            predictions.forEach((prediction) => {
              if (prediction.class === 'person') {
                personCount += 1;
              }
            });

            setCount(personCount);
            if (onCountChange) onCountChange(personCount);
          } else {
            console.log('Waiting for video to be ready');
          }

          requestAnimationFrame(detect);
        };

        detect();
      } else {
        console.error('Canvas context is null');
      }
    } else {
      console.error('Canvas or video element is null');
    }
  };

  useEffect(() => {
    const init = async () => {
      await setupCamera();
      detectObjects();
    };
    init();
  }, []);

  return (
    <Stack sx={{
      justifyContent: "space-around",
      alignItems: "center",
    }}>
      {showCounter && (
        <>
          <Paper elevation={1} sx={{  margin: 1, backgroundColor: '#023f81', padding: 2, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontFamily: 'opensanshebrewcondensed-regular', textTransform: 'uppercase', color: 'white' }} >Contagem: <span style={{ fontWeight: 'bold' }}> {count} </span></Typography>
          </Paper>
        </>
      )}
      <video ref={videoRef} autoPlay style={{ display: 'none' }} />
      <canvas ref={canvasRef} width={640} height={480} style={{ border: '1px solid black', display: showCounter ? 'block' : 'none' }} />
    </Stack>
  );
};

export default PeopleCounter;
