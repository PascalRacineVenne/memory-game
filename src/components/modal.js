import React from 'react';

const Modal = ({ show, onClose, title, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h4 className='modal-title'>{title}</h4>
        </div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <button className='btn-modal' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
