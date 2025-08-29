export const createTextElement = (text) => ({
  id: `text-${Date.now()}`,
  type: 'text',
  text,
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  fontSize: 24,
  fill: 'black',
});

export const createImageElement = (url) => ({
  id: `img-${Date.now()}`,
  type: 'image',
  src: url,
  x: window.innerWidth / 2 - 100,
  y: window.innerHeight / 2 - 75,
  width: 200,
  height: 150,
});

export const updateShape = (shapes, id, newAttrs) =>
  shapes.map((s) => (s.id === id ? { ...s, ...newAttrs } : s));

export const removeShape = (shapes, id) =>
  shapes.filter((s) => s.id !== id);

export const bringForward = (shapes, id) => {
  const idx = shapes.findIndex((s) => s.id === id);
  if (idx < 0 || idx === shapes.length - 1) return shapes;
  
  const next = shapes.slice();
  const [item] = next.splice(idx, 1);
  next.splice(idx + 1, 0, item);
  return next;
};

export const sendBackward = (shapes, id) => {
  const idx = shapes.findIndex((s) => s.id === id);
  if (idx <= 0) return shapes;
  
  const next = shapes.slice();
  const [item] = next.splice(idx, 1);
  next.splice(idx - 1, 0, item);
  return next;
};

export const saveToLocalStorage = (shapes) => {
  try {
    localStorage.setItem('canvasShapes', JSON.stringify(shapes));
    return true;
  } catch (error) {
    console.error('Failed to save:', error);
    return false;
  }
};

export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('canvasShapes');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load:', error);
    return null;
  }
}; 