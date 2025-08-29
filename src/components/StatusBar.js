import React from 'react';

const StatusBar = ({ selectedId, shapesCount, historyIndex, historyLength }) => {
  return (
    <div className="fixed bottom-0 left-4 z-50 bg-white rounded-lg shadow-lg border border-slate-200 px-4 py-2">
      <div className="text-xs text-slate-600">
        <span className="font-medium">Selected:</span> {selectedId || 'None'} | 
        <span className="font-medium ml-2">Elements:</span> {shapesCount} |
        <span className="font-medium ml-2">History:</span> {historyIndex + 1}/{historyLength}
      </div>
    </div>
  );
};

export default StatusBar; 