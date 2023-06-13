import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {  useEffect } from 'react';
import { Div, Large } from '../Styled.imafeFinder';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImage, tags, onClouse }) => {
  useEffect(() => {
  const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClouse();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    //чому тут return?
return () => {
  window.removeEventListener('keydown', handleKeyDown);
}

  }, [onClouse])
  //монтування компонента додю слухача keydown і викликаю onClose()
  
  //перевіряю чи натиснута клавіша Escape
 
  //перевіряю чи було клікнуте модальне вікно зовні (через createPortal)
  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      onClouse();
    }
  };

 
    return createPortal(
      //відображаю модальне вікно
      <Div onClick={handleBackdropClose}>
        <Large>
          <img src={largeImage} alt={tags} />
        </Large>
      </Div>,
      modalRoot
    );
  }


Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClouse: PropTypes.func.isRequired,
};