import React from 'react';
import styles from './modalError.module.scss';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';
import PropTypes from 'prop-types';
import AlertIcon from '../../../svg/alertIcon/alertIcon';

const ModalError = ({handleCloseModal}) => (
  <div className={styles.ModalError} data-testid="ModalEducationProject">
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <AlertIcon/>
        <p>Server Error</p>
      </div>
      <button
        className={styles.closeButton}
        onClick={handleCloseModal}
      >
        <CloseIcon/>
      </button>
    </div>
    <p className={styles.content}>
      Unfortunately, we are experiencing some issues with our server.
      We are working to resolve these issues and hope to restore normal service as soon as possible.
      Please try again later. We apologize for any inconvenience
    </p>
  </div>
);
ModalError.propTypes = {
  handleCloseModal: PropTypes.func,
  error: PropTypes.string,
};
export default ModalError;
