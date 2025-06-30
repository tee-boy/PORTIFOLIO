import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
