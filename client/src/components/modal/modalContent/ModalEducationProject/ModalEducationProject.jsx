import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalEducationProject.module.scss';
import LongArrowIcon from '../../../svg/arrowIcons/LongArrowIcon/LongArrowIcon';

const ModalEducationProject = ({handleConfirmModal}) => (
  <article className={styles.modalCookies} data-testid="ModalEducationProject">
    <h2 className={styles.modalCookies__title2}>Welcome to our store!</h2>
    <p className={styles.modalCookies__text}>
        Please note that this site is a demonstration PET project,
      created to illustrate web design and e-commerce functionality.
      All products and prices presented here are fictional,
      and no real transactions or sales are conducted.
    </p>
    <p className={styles.modalCookies__text}>
        This project is part of the teams portfolio work,
      and we are excited to share our ideas and achievements
      in web development with you. You can browse through different
      pages to evaluate the design, user interface,
      and functional capabilities of the site.
    </p>
    <section className={styles.modalCookies__block}>
      <p className={styles.modalCookies__text}>
        If you want to continue click
      </p>
      <LongArrowIcon/>
      <button
        className={styles.modalCookies__button}
        onClick={handleConfirmModal}
        aria-label='close modal window'
      >
        <span>go to shop</span>
      </button>
    </section>
  </article>
);
ModalEducationProject.propTypes = {
  handleConfirmModal: PropTypes.func,
};
export default ModalEducationProject;
