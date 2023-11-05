import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalCookies.module.scss';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';

const ModalCookies = ({handleCloseModal}) => (
  <div className={styles.ModalCookies} data-testid="ModalCookies">
    <div className={styles.container}>
      <p className={styles.content}>BAVOVNA uses cookies to give you the best
          shopping experience. If you continue to use
          our services, we will assume that you agree
          to the use of such cookies. Find out more <
        a
        href={'https://www.aboutcookies.org/'}
        target='_blank'
        rel="noreferrer"
      >about cookies</a> and how
          you can refuse them</p>
      <button
        className={styles.closeButton}
        onClick={handleCloseModal}
      ><CloseIcon/></button>
    </div>
    <button
      className={styles.button}
      onClick={handleCloseModal}
    >
      <span>yes, i agree</span>
    </button>
  </div>
);
ModalCookies.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default ModalCookies;
