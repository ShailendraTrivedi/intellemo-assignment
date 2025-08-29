import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-konva";

const URLImage = ({ src, onSelect, onChange, ...rest }) => {
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!src) {
      setImage(null);
      return;
    }
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => setImage(img);
    img.onerror = () => setImage(null);
  }, [src]);

  return (
    <Image
      image={image}
      ref={imageRef}
      {...rest}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
          rotation: e.target.rotation(),
        });
      }}
    />
  );
};

export default URLImage;
