import React from 'react';
import styles from './ModalError.module.scss';
import CloseIcon from '../svg/CloseIcon/CloseIcon';
import PropTypes from 'prop-types';
import AlertIcon from '../svg/AlertIcon/AlertIcon';

const ModalError = ({ handleCloseModal }) => (
  <div className={styles.modalError}>
    <div className={styles.modalError__container}>
      <div className={styles.modalError__titleBlock}>
        <AlertIcon />
        <p>Server Error</p>
      </div>
      <button
        className={styles.modalError__closeButton}
        type="button"
        aria-label="close modal window"
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
    </div>
    <p className={styles.modalError__content}>
      Unfortunately, we are experiencing some issues with our server.
    </p>
    <p className={styles.modalError__content}>
      We are working to resolve these issues and hope to restore normal service as soon as possible.
      Please try again later.
      <br /> We apologize for any inconvenience
    </p>
  </div>
);
ModalError.propTypes = {
  handleCloseModal: PropTypes.func,
  error: PropTypes.string,
};
export default ModalError;
