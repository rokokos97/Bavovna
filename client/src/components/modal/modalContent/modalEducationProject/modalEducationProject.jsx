import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalEducationProject.module.scss';
import LongArrowIcon from '../../../svg/arrowIcons/longArrowIcon/longArrowIcon';

const ModalEducationProject = ({handleConfirmModal}) => (
  <div className={styles.modalCookies} data-testid="ModalEducationProject">
    <p className={styles.title}>Welcome to our store!</p>
    <p className={styles.text}>
        Please note that this site is a demonstration PET project,
      created to illustrate web design and e-commerce functionality.
      All products and prices presented here are fictional,
      and no real transactions or sales are conducted.
    </p>
    <p className={styles.text}>
        This project is part of the teams portfolio work,
      and we are excited to share our ideas and achievements
      in web development with you. You can browse through different
      pages to evaluate the design, user interface,
      and functional capabilities of the site.
    </p>
    <div className={styles.block}>
      <p className={styles.text}>
        If you want to continue click
      </p>
      <LongArrowIcon/>
      <button
        className={styles.button}
        onClick={handleConfirmModal}
      >
        <span>go to shop</span>
      </button>
    </div>
  </div>
);
ModalEducationProject.propTypes = {
  handleConfirmModal: PropTypes.func,
};
export default ModalEducationProject;
