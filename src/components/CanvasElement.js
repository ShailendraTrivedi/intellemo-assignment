import React from 'react';
import { Text } from 'react-konva';
import ResizableElement from '../helper/ResizableElement';
import { URLImage } from './';

const CanvasElement = ({ shape, isSelected, onSelect, onChange }) => {
  const commonProps = {
    x: shape.x,
    y: shape.y,
    width: shape.width,
    height: shape.height,
    rotation: shape.rotation || 0,
  };

  if (shape.type === 'image') {
    return (
      <ResizableElement
        isSelected={isSelected}
        onSelect={() => onSelect(shape.id)}
        onChange={(newAttrs) => onChange(shape.id, newAttrs)}
      >
        <URLImage
          {...shape}
          onSelect={() => onSelect(shape.id)}
          onChange={(newAttrs) => onChange(shape.id, newAttrs)}
          {...commonProps}
        />
      </ResizableElement>
    );
  }

  if (shape.type === 'text') {
    return (
      <ResizableElement
        isSelected={isSelected}
        onSelect={() => onSelect(shape.id)}
        onChange={(newAttrs) => onChange(shape.id, newAttrs)}
      >
        <Text
          {...shape}
          draggable
          onClick={() => onSelect(shape.id)}
          onTap={() => onSelect(shape.id)}
          onDragEnd={(e) =>
            onChange(shape.id, { x: e.target.x(), y: e.target.y() })
          }
        />
      </ResizableElement>
    );
  }

  return null;
};

export default CanvasElement; 