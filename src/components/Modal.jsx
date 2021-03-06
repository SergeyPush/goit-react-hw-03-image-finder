import React, { Component, createRef } from 'react';
import T from 'prop-types';

class Modal extends Component {
  static propTypes = {
    image: T.string.isRequired,
    closeModal: T.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  handleButtonClose = () => {
    this.props.closeModal();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && this.backdropRef.current !== e.target) {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { image } = this.props;
    return (
      <div>
        <div
          className="overlay"
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
          role="presentation"
        >
          <div className="modal">
            <button
              type="button"
              className="close-button"
              onClick={this.handleButtonClose}
            >
              <i className="material-icons">close</i>
            </button>
            <img src={image} alt="Selected item" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
