import React from 'react';
import styles from './ProposeBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const ProposeBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.proposeBlock} data-testid='ProposeBlock'>
      <picture className={styles.img}>
        <source
          media='(min-width: 1000px)'
          srcSet='/img/images/AboutUs/proposeBlock/propose_1.webp'
          loading='lazy'
        />
        <source
          media='(min-width: 581px)'
          srcSet='/img/images/AboutUs/proposeBlock/tabletProposeBlock_1.webp'
          loading='lazy'
        />
        <img
          src='/img/images/AboutUs/proposeBlock/mobileProposeBlock_1.webp'
          loading='lazy'
          alt='Model on the beach'
        />
      </picture>
      <picture className={`${styles.img} ${styles.lastChild}`}>
        <source
          media='(min-width: 1000px)'
          srcSet='/img/images/AboutUs/proposeBlock/propose_2.webp'
          loading='lazy'
        />
        <source
          media='(min-width: 581px)'
          srcSet='/img/images/AboutUs/proposeBlock/tabletProposeBlock_2.webp'
          loading='lazy'
        />
        <img
          src='/img/images/AboutUs/proposeBlock/mobileProposeBlock_2.webp'
          loading='lazy'
          alt='Model with a bouquet in her hands'
        />
      </picture>
      <div className={styles.description}>
        <h2 className={styles.newsLetterBlock__title2}>
          <span>What&#x20;</span>
          we propose
        </h2>
        <div className={styles.innerText}>
          <p className={styles.modalCookies__text}>
            In the BAVOVNA collection, you can find many models of various
            styles and cuts - from casual T-shirts and jeans to elegant dresses
            and blouses. Each product is manufactured using advanced
            technologies and with great attention to detail. BAVOVNA clothes are
            high-quality, durable, and comfortable to wear.
          </p>
          <p className={styles.modalCookies__text}>
            By choosing BAVOVNA clothes, you take care of your health and the
            environment and emphasize your style and elegance.
          </p>
        </div>
        <button
          className={styles.newCollectionBlock__button}
          type='button'
          aria-label='go to new collection page'
          onClick={() => navigate('/shop?status=new')}
        >
          <span>View new</span>
        </button>
      </div>
    </div>
  );
};

export default ProposeBlock;
