import React from 'react';
import styles from './modalError.module.scss';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';
import PropTypes from 'prop-types';

const ModalError = ({handleCloseModal, error}) => (
  <div className={styles.ModalError} data-testid="ModalCookies">
    <div className={styles.container}>
      <p className={styles.content}>{error}</p>
      <button
        className={styles.closeButton}
        onClick={handleCloseModal}
      ><CloseIcon/></button>
    </div>
  </div>
);
ModalError.propTypes = {
  handleCloseModal: PropTypes.func,
  error: PropTypes.string,
};
export default ModalError;
