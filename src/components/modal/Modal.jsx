import React, {useEffect, useMemo} from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';

const modalRootElement = document.querySelector('#modal');

const Modal = ({isOpen, onClose, children}) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (isOpen) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if (isOpen) {
    return createPortal(
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {children}</div>
        </div>,
        element,
    );
  }

  return null;
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export {Modal};
