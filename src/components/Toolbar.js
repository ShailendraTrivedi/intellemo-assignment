import React from 'react';

const Toolbar = ({
  onAddText,
  onAddImage,
  onUndo,
  onRedo,
  onBringForward,
  onSendBackward,
  onDelete,
  onSave,
  onLoad,
  historyIndex,
  historyLength,
  selectedId,
}) => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-4 z-50 bg-white rounded-xl shadow-xl border border-slate-200 p-4">
      <div className="space-y-3">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Tools</h3>
        </div>
        
        {/* Add Elements */}
        <div className="space-y-2">
          <button 
            className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-2"
            onClick={onAddText}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Add Text
          </button>
          
          <button 
            className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-2"
            onClick={onAddImage}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add Image
          </button>
        </div>

        {/* History Controls */}
        <div className="space-y-2">
          <div className="flex gap-1">
            <button 
              className="flex-1 px-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={onUndo}
              disabled={historyIndex <= 0}
            >
              <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>
            <button 
              className="flex-1 px-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={onRedo}
              disabled={historyIndex >= historyLength - 1}
            >
              <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Layer Controls */}
        <div className="space-y-2">
          <button 
            className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onBringForward}
            disabled={!selectedId}
          >
            <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            Forward
          </button>
          
          <button 
            className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onSendBackward}
            disabled={!selectedId}
          >
            <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
            Backward
          </button>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button 
            className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onDelete}
            disabled={!selectedId}
          >
            <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </div>

        {/* File Operations */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <button 
            className="w-full px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95"
            onClick={onSave}
          >
            <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save
          </button>
          
          <button 
            className="w-full px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:shadow-md active:scale-95"
            onClick={onLoad}
          >
            <svg className="w-3 h-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Load
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar; 