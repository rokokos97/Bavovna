import React from 'react';
import styles from './BavovnaCoverImageBlock.module.scss';

const BavovnaCoverImageBlock = () => (
  <article className={styles.bavovnaCoverImageBlock} data-testid="BavovnaCoverImageBlock">
    <section className={styles.bavovnaCoverImageBlock__imageLineSection}>
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/1.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/2.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/3.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/4.webp"
        alt="a pice of big image of cotton plant"
      />
    </section>
    <section className={styles.bavovnaCoverImageBlock__imageLineSection}>
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/5.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/6.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/7.webp"
        alt="a pice of big image of cotton plant"
      />
      <img
        loading="lazy"
        className={styles.bavovnaCoverImageBlock__image}
        src="/img/images/Bavovna/8.webp"
        alt="a pice of big image of cotton plant"
      />
    </section>
  </article>
);

export default BavovnaCoverImageBlock;
