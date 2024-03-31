import React from 'react';
import styles from './FashionBlock.module.scss';

const FashionBlock = () => {
  return (
    <div className={styles.fashionBlock} data-testid='FashionBlock'>
      <div className={styles.imgs}>
        <picture className={styles.mainImg}>
          <source
            media='(min-width: 769px)'
            srcSet='/img/images/AboutUs/fashionBlock/fashion_1.webp'
            loading='lazy'
          />
          <source
            media='(min-width: 581px)'
            srcSet='/img/images/AboutUs/fashionBlock/tabletFashionBlock_1.webp'
            loading='lazy'
          />
          <img
            src='/img/images/AboutUs/fashionBlock/mobileFashionBlock_1.webp'
            loading='lazy'
            alt='Flea market'
          />
        </picture>
        <picture className={styles.secondImg}>
          <source
            media='(min-width: 769px)'
            srcSet='/img/images/AboutUs/fashionBlock/fashion_2.webp'
            loading='lazy'
          />
          <source
            media='(min-width: 581px)'
            srcSet='/img/images/AboutUs/fashionBlock/tabletFashionBlock_2.webp'
            loading='lazy'
          />
          <img
            src='/img/images/AboutUs/fashionBlock/mobileFashionBlock_2.webp'
            loading='lazy'
            alt='Rolls of fabric'
          />
        </picture>
      </div>
      <div className={styles.description}>
        <h2 className={styles.newsLetterBlock__title2}>
          <span>Why&#x20;</span>
          slow-fashion
        </h2>
        <div className={styles.fashionBlock_innerText}>
          <p className={styles.modalCookies__text}>
            Nowadays, fashion is changing at the speed of light. Each new season
            brings new trends that require us to update our wardrobes. However,
            more and more people are beginning to think about the cost of such
            an update and how harmful it is to the environment.
          </p>
          <p className={styles.modalCookies__text}>
            Fast fashion, which is in constant motion, causes huge damage to the
            environment. Such rapid production leads to a large amount of waste
            and pollution of water and air. In addition, constant pressure on
            manufacturers leads to the exploitation of labor resources and
            violations of workers&#39; rights.
          </p>
          <p className={styles.modalCookies__text}>
            In turn, slow fashion is aimed at producing high-quality and durable
            items that can last for many years. This means that slow fashion
            manufacturers use quality materials and favor handmade work, further
            reducing the environmental footprint.
          </p>
          <p className={styles.modalCookies__text}>
            In conclusion, instead of following fashion trends and buying a lot
            of clothes that quickly go out of style and wear out quickly, we
            should consider investing in quality and durable items that will
            look stylish and modern for many years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FashionBlock;
