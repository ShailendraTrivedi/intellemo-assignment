import React, { useRef, useEffect } from "react";
import { Transformer } from "react-konva";

const ResizableElement = ({ children, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef(null);
  const trRef = useRef(null);

  // attach transformer dynamically
  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleDragEnd = (e) => {
    onChange({
      x: e.target.x(),
      y: e.target.y(),
      rotation: e.target.rotation(),
    });
  };

  const handleTransformEnd = () => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // reset scaling so it doesn't accumulate
    node.scaleX(1);
    node.scaleY(1);

    if (node.className === "Text") {
      // ✅ Special case: resize text by changing fontSize
      onChange({
        x: node.x(),
        y: node.y(),
        rotation: node.rotation(),
        fontSize: Math.max(5, (node.fontSize() || 20) * scaleX), // scale font size
        width: node.width() * scaleX, // keep wrapping consistent
      });
    } else {
      // ✅ Default: resize normal shapes (rect, image, video, etc.)
      onChange({
        x: node.x(),
        y: node.y(),
        rotation: node.rotation(),
        width: Math.max(20, node.width() * scaleX),
        height: Math.max(20, node.height() * scaleY),
      });
    }
  };

  // Clone child element and attach refs + props
  const clonedChild = React.cloneElement(children, {
    ref: shapeRef,
    draggable: true,
    onClick: onSelect,
    onTap: onSelect,
    onDragEnd: handleDragEnd,
    onTransformEnd: handleTransformEnd,
  });

  return (
    <>
      {clonedChild}
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={true}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
            "middle-left",
            "middle-right",
          ]}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default ResizableElement;
