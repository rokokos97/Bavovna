import React from 'react';
import styles from './PaymentSuccessModal.module.scss';
import CloseIcon from '../../../svg/CloseIcon/CloseIcon';
import PropTypes from 'prop-types';
const PaymentSuccessModal = ({handleCloseModal}) => {
  return (
    <div className={styles.PaymentSuccessModal}>
      <button
        className={styles.PaymentSuccessModal__closeButton}
        type='button'
        aria-label='close modal window'
        onClick={handleCloseModal}
      >
        <CloseIcon/>
      </button>
      <section className={styles.PaymentSuccessModal__contentBlock}>
        <h2 className={styles.PaymentSuccessModal__title}>Payment Successful</h2>
        <p className={styles.PaymentSuccessModal__text}>
          Your payment was processed successfully via PayPal.
        </p>
        <div
          className={styles.PaymentSuccessModal__buttons}>
          <button
            className={styles.PaymentSuccessModal__cancelButton}
            type='button'
            aria-label='cancel'
            onClick={handleCloseModal}
          >
            <span>cancel</span>
          </button>
          <button
            className={styles.PaymentSuccessModal__loginButton}
            type='button'
            aria-label='confirm'
            onClick={handleCloseModal}
          >
            <span>confirm</span>
          </button>
        </div>
      </section>
    </div>
  );
};

PaymentSuccessModal.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default PaymentSuccessModal;
