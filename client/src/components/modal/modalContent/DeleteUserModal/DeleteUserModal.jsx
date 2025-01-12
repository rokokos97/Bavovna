import React from 'react';
import styles from './DeleteUserModal.module.scss';
import CloseIcon from '../../../svg/CloseIcon/CloseIcon';
import ArrowBackIcon from '../../../svg/arrowIcons/ArrowBackIcon/ArrowBackIcon';
import PropTypes from 'prop-types';
const DeleteUserModal = ({ handleCloseModal, handleDeleteUser }) => {
  return (
    <div className={styles.deleteUserModal} data-testid="PaymentSuccessModal">
      <button
        className={styles.deleteUserModal__closeButton}
        type="button"
        aria-label="close modal window"
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
      <section className={styles.deleteUserModal__contentBlock}>
        <h2 className={styles.deleteUserModal__title}>
          Are you sure you want to delete your account?
        </h2>
        <p className={styles.deleteUserModal__text}>
          Deleting your account is permanent and cannot be undone. All your data,
          <br />
          including personal information, preferences, and activity history, will be
          <br />
          permanently erased from our system.
        </p>
        <div className={styles.deleteUserModal__buttons}>
          <button
            className={styles.deleteUserModal__cancelButton}
            type="button"
            aria-label="cancel"
            onClick={handleCloseModal}
          >
            <ArrowBackIcon />
            <span>cancel</span>
          </button>
          <button
            className={styles.deleteUserModal__loginButton}
            type="button"
            aria-label="confirm"
            onClick={handleDeleteUser}
          >
            <span>confirm</span>
          </button>
        </div>
      </section>
    </div>
  );
};

DeleteUserModal.propTypes = {
  handleCloseModal: PropTypes.func,
  handleDeleteUser: PropTypes.func,
};
export default DeleteUserModal;
