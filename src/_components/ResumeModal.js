"use client"
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-[#0d0d0d] border border-white/10 rounded-xl shadow-2xl w-[95vw] max-w-3xl mx-4"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header — always visible */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0d0d0d] rounded-t-xl">
          <span className="text-white/60 text-sm font-mono tracking-wide">Resume</span>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-red-500 border border-white/10 hover:border-red-500/50 px-3 py-1 rounded-md transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-auto p-1 min-h-0">
          {children}
        </div>
      </div>

      {/* Tap-outside hint */}
      <p className="mt-3 text-white/30 text-xs font-mono">Click outside or press Esc to close</p>
    </div>
  );
};

export default Modal;
