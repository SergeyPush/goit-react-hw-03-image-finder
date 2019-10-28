import React from 'react';

const Modal = ({ image, closeModal }) => {
  const handleButtonClose = () => {
    // console.log('close');
    closeModal();
  };

  return (
    <div>
      <div className="overlay">
        <div className="modal">
          <button
            type="button"
            className="close-button"
            onClick={handleButtonClose}
          >
            <i className="material-icons">close</i>
          </button>
          <img src={image} alt="Selected item" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
