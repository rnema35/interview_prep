import React, { useRef, useEffect } from 'react';
import './Canvas.css'

const Canvas = ({ width, height, tile_size, draw, ...rest }) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (draw) {
        draw(context);
      }

      context.strokeStyle = "#ccc";
        for (let x = 0; x <= canvas.width; x += tile_size) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvas.height);
            context.stroke();
        }
        for (let y = 0; y <= canvas.height; y += tile_size) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width, y);
            context.stroke();
        }
    }, [draw, tile_size]);
  
    return (
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        tile_size={tile_size}
        {...rest}
      />
    );
  };
  
  export default Canvas;
  