import React, { useEffect, useRef, useState } from "react";
import Konva from "konva";
import { Image } from "react-konva";

const URLVideo = ({
  src,
  playing = false,
  stopSignal = 0,
  onSelect,
  onChange,
  width,
  height,
  ...rest
}) => {
  const imageNodeRef = useRef(null);   // Konva.Image node
  const videoElRef = useRef(null);     // HTMLVideoElement
  const [videoEl, setVideoEl] = useState(null);

  // Load video
  useEffect(() => {
    if (!src) {
      if (videoElRef.current) {
        videoElRef.current.pause();
      }
      setVideoEl(null);
      return;
    }

    const vid = document.createElement("video");
    vid.crossOrigin = "Anonymous";
    vid.src = src;
    vid.loop = false;
    vid.muted = true; 
    vid.playsInline = true;
    vid.preload = "auto";
    vid.width = width || 300;
    vid.height = height || 150;

    vid.onloadeddata = () => setVideoEl(vid);
    vid.onerror = () => setVideoEl(null);

    videoElRef.current = vid;

    return () => {
      try {
        vid.pause();
        vid.src = "";
      } catch {}
    };
  }, [src, width, height]);

  // Play/pause control
  useEffect(() => {
    if (!videoEl) return;

    if (playing) {
      const p = videoEl.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {}); // ignore autoplay errors
      }
    } else {
      videoEl.pause();
    }
  }, [playing, videoEl]);

  // Stop video
  useEffect(() => {
    if (!videoEl) return;
    videoEl.pause();
    try {
      videoEl.currentTime = 0;
    } catch {}
  }, [stopSignal, videoEl]);

  // Redraw loop with Konva.Animation
  useEffect(() => {
    if (!videoEl || !imageNodeRef.current) return;

    const layer = imageNodeRef.current.getLayer();
    if (!layer) return;

    let anim;
    if (playing) {
      anim = new Konva.Animation(() => {
        // Konva will redraw automatically
      }, layer);
      anim.start();
    }

    return () => {
      if (anim) anim.stop();
    };
  }, [videoEl, playing]);

  return (
    <Image
      ref={imageNodeRef}
      image={videoEl}
      {...rest}
      width={width}
      height={height}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange?.({
          x: e.target.x(),
          y: e.target.y(),
          rotation: e.target.rotation(),
        });
      }}
      onTransformEnd={(e) => {
        const node = e.target;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        node.scaleX(1);
        node.scaleY(1);
        onChange?.({
          x: node.x(),
          y: node.y(),
          rotation: node.rotation(),
          width: Math.max(20, node.width() * scaleX),
          height: Math.max(20, node.height() * scaleY),
        });
      }}
    />
  );
};

export default URLVideo;
