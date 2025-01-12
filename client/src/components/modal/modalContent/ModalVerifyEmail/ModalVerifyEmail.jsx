import React from 'react';
import styles from './ModalVerifyEmail.module.scss';
import CloseIcon from '../../../svg/CloseIcon/CloseIcon';
import PropTypes from 'prop-types';

const ModalVerifyEmail = ({ handleCloseModal, email }) => (
  <div className={styles.modalVerifyEmail} data-testid="ModalVerifyEmail">
    <button
      className={styles.modalVerifyEmail__closeButton}
      type="button"
      aria-label="close modal window"
      onClick={handleCloseModal}
    >
      <CloseIcon />
    </button>
    <p className={styles.modalVerifyEmail__content}>
      We have sent an e-mail to {email} please click on the link to confirm your e-mail address.
    </p>
  </div>
);
ModalVerifyEmail.propTypes = {
  email: PropTypes.string,
  handleCloseModal: PropTypes.func,
};
export default ModalVerifyEmail;
