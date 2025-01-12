import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalCookies.module.scss';
import CloseIcon from '../svg/CloseIcon/CloseIcon';

const ModalCookies = ({ handleCloseModal, handleConfirmModal }) => (
  <article className={styles.modalCookies} data-testid="ModalEducationProject">
    <section className={styles.modalCookies__container}>
      <p className={styles.modalCookies__content}>
        BAVOVNA uses cookies to give you the best
        <br />
        shopping experience. If you continue to use our
        <br />
        services, we will assume that you agree to the use of
        <br />
        such cookies. Find out more{' '}
        <a
          href={'https://www.aboutcookies.org/'}
          target="_blank"
          rel="noreferrer"
          aria-label="Learn about cookies"
        >
          about cookies
        </a>{' '}
        and how
        <br />
        you can refuse them
      </p>
      <button
        className={styles.modalCookies__closeButton}
        type="button"
        aria-label="close modal window"
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
    </section>
    <button
      type="button"
      aria-label="confirm cookies and close modal window"
      className={styles.modalCookies__button}
      onClick={handleConfirmModal}
    >
      <span>yes, i agree</span>
    </button>
  </article>
);
ModalCookies.propTypes = {
  handleConfirmModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
};
export default ModalCookies;
