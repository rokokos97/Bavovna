import React from 'react';
import styles from './InformModal.module.scss';
import CloseIcon from '../../../svg/CloseIcon/CloseIcon';
import PropTypes from 'prop-types';

const InformModal = ({handleCloseModal}) => {
  return (
    <div className={styles.informModal} data-testid="InformModal">
      <button
        className={styles.informModal__closeButton}
        type='button'
        aria-label='close modal window'
        onClick={handleCloseModal}
      >
        <CloseIcon/>
      </button>
      <section className={styles.informModal__contentBlock}>
        <h2 className={styles.informModal__content}>your account has been successfully deleted</h2>
        <button className={styles.informModal__button} type='button' aria-label='go to home page' onClick={handleCloseModal}>
          <span>go to home page</span>
        </button>
      </section>
    </div>
  );
};

InformModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default InformModal;
