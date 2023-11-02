import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalLogin.module.scss';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';

const ModalLogin = ({handleCloseModal}) => (
  <div className={styles.modalLogin} data-testid="ModalLogin">
    <div className={styles.container}>
      <p className={styles.content}>BAVOVNA uses cookies to give you the best
          shopping experience. If you continue to use
          our services, we will assume that you agree
        to the use of such cookies. Find out more <a href={'https://www.aboutcookies.org/'}>about cookies</a> and how
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
ModalLogin.propTypes = {
  handleCloseModal: PropTypes.func,
};
export default ModalLogin;
