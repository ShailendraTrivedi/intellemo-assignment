import React, { useState, useEffect } from 'react';
import { 
  Canvas, 
  Toolbar, 
  Header, 
  StatusBar 
} from './components';
import { useCanvasHistory } from './hooks/useCanvasHistory';
import {
  createTextElement,
  createImageElement,
  updateShape,
  removeShape,
  bringForward,
  sendBackward,
  saveToLocalStorage,
  loadFromLocalStorage,
} from './utils/canvasHelpers';

export default function App() {
  const [shapes, setShapes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  
  const {
    history,
    historyIndex,
    undo: undoHistory,
    redo: redoHistory,
    canUndo,
    canRedo,
  } = useCanvasHistory(shapes);

  const updateShapes = (updater) => {
    setShapes((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return next;
    });
  };

  const handleSelect = (id) => setSelectedId(id);

  const handleChange = (id, newAttrs) => {
    updateShapes((prev) => updateShape(prev, id, newAttrs));
  };

  const handleAddText = () => {
    const text = prompt('Add Text:');
    if (text?.trim()) {
      const newText = createTextElement(text.trim());
      updateShapes((prev) => [...prev, newText]);
      setSelectedId(newText.id);
    }
  };

  const handleAddImage = () => {
    const url = prompt('Image URL:');
    if (url?.trim()) {
      const newImage = createImageElement(url.trim());
      updateShapes((prev) => [...prev, newImage]);
      setSelectedId(newImage.id);
    }
  };

  const handleUndo = () => {
    const previousShapes = undoHistory();
    if (previousShapes) {
      setShapes(previousShapes);
      setSelectedId(null);
    }
  };

  const handleRedo = () => {
    const nextShapes = redoHistory();
    if (nextShapes) {
      setShapes(nextShapes);
      setSelectedId(null);
    }
  };

  const handleBringForward = () => {
    if (!selectedId) return;
    updateShapes((prev) => bringForward(prev, selectedId));
  };

  const handleSendBackward = () => {
    if (!selectedId) return;
    updateShapes((prev) => sendBackward(prev, selectedId));
  };

  const handleDelete = () => {
    if (!selectedId) return;
    updateShapes((prev) => removeShape(prev, selectedId));
    setSelectedId(null);
  };

  const handleSave = () => {
    const success = saveToLocalStorage(shapes);
    if (success) {
      alert('Canvas saved successfully!');
    } else {
      alert('Failed to save canvas.');
    }
  };

  const handleLoad = () => {
    const loadedShapes = loadFromLocalStorage();
    if (loadedShapes) {
      setShapes(loadedShapes);
      setSelectedId(null);
      alert('Canvas loaded successfully!');
    } else {
      alert('No saved canvas found or failed to load.');
    }
  };

  const handleCanvasClick = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  // Keyboard navigation for text elements
  useEffect(() => {
    const handler = (e) => {
      if (!selectedId) return;
      
      const node = shapes.find((s) => s.id === selectedId);
      if (!node || node.type !== 'text') return;

      const step = e.shiftKey ? 10 : 5;
      let dx = 0;
      let dy = 0;
      
      if (e.key === 'ArrowUp') dy = -step;
      else if (e.key === 'ArrowDown') dy = step;
      else if (e.key === 'ArrowLeft') dx = -step;
      else if (e.key === 'ArrowRight') dx = step;
      else return;

      e.preventDefault();
      handleChange(node.id, { x: node.x + dx, y: node.y + dy });
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedId, shapes, handleChange]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <Toolbar
        onAddText={handleAddText}
        onAddImage={handleAddImage}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onBringForward={handleBringForward}
        onSendBackward={handleSendBackward}
        onDelete={handleDelete}
        onSave={handleSave}
        onLoad={handleLoad}
        historyIndex={historyIndex}
        historyLength={history.length}
        selectedId={selectedId}
      />

      <Canvas
        shapes={shapes}
        selectedId={selectedId}
        onSelect={handleSelect}
        onChange={handleChange}
        onCanvasClick={handleCanvasClick}
      />

      <StatusBar
        selectedId={selectedId}
        shapesCount={shapes.length}
        historyIndex={historyIndex}
        historyLength={history.length}
      />
    </div>
  );
}
