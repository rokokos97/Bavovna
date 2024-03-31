import React from 'react';
import styles from './AboutBlock.module.scss';

const AboutBlock = () => {
  return (
    <div className={styles.aboutBlock} data-testid='AboutBlock'>
      <div className={styles.imgs}>
        <picture className={styles.mainImg}>
          <source
            media='(min-width: 1000px)'
            srcSet='/img/images/AboutUs/aboutBlock/aboutBlock_1.webp'
            loading='lazy'
          />
          <source
            media='(min-width: 581px)'
            srcSet='/img/images/AboutUs/aboutBlock/tabletAboutBlock_1.webp'
            loading='lazy'
          />
          <img
            src='/img/images/AboutUs/aboutBlock/mobileAboutBlock_1.webp'
            loading='lazy'
            alt='White hoodie and jeans'
          />
        </picture>
        <div className={styles.secondImg}>
          <img
            loading='lazy'
            src='/img/images/AboutUs/aboutBlock/aboutBlock_2.webp'
            alt='Cotton flowers'
          />
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.newsLetterBlock__title2}>
          <span>About&#x20;</span>
          bavovna
        </h2>
        <p className={styles.modalCookies__text}>
          BAVOVNA is a women&#39;s clothing brand that cares about the health
          and comfort of its customers. All products of this brand are made from
          organic cotton, which is grown without chemical fertilizers and
          pesticides. Thus, BAVOVNA clothes are environmentally friendly and
          safe for health.
        </p>
      </div>
    </div>
  );
};

export default AboutBlock;
