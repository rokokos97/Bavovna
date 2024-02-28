import React, {useEffect, useMemo} from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';

const modalRootElement = document.querySelector('#modal');

const Modal = ({isOpen, handleCloseModal, children}) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (isOpen) {
      modalRootElement.appendChild(element);

      const handleCloseModalKeysPress = (event) => {
        if (event.key === 'Escape' || event.key === 'Enter') {
          handleCloseModal();
        }
      };

      document.addEventListener('keydown', handleCloseModalKeysPress);

      return () => {
        document.removeEventListener('keydown', handleCloseModalKeysPress);
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isOpen) {
    return createPortal(
        <article className={styles.modal}>
          <section className={styles.modalContent}>{children}</section>
        </article>,
        element,
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  children: PropTypes.node,
};

export {Modal};
