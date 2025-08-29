import React from 'react';
import { Stage, Layer } from 'react-konva';
import CanvasElement from './CanvasElement';

const Canvas = ({ 
  shapes, 
  selectedId, 
  onSelect, 
  onChange, 
  onCanvasClick 
}) => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={onCanvasClick}
      className="bg-white"
    >
      <Layer>
        {shapes.map((shape) => (
          <CanvasElement
            key={shape.id}
            shape={shape}
            isSelected={shape.id === selectedId}
            onSelect={onSelect}
            onChange={onChange}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas; 