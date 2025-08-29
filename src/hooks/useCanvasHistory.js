import { useState, useEffect } from 'react';

export const useCanvasHistory = (shapes) => {
  const [history, setHistory] = useState([shapes]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    if (history[historyIndex] !== shapes) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(shapes);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  }, [shapes, history, historyIndex]);

  const undo = () => {
    if (historyIndex <= 0) return false;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    return history[newIndex];
  };

  const redo = () => {
    if (historyIndex >= history.length - 1) return false;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    return history[newIndex];
  };

  return {
    history,
    historyIndex,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
  };
}; 