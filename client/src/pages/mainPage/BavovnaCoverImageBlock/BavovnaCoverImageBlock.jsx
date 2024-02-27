import React from 'react';
import styles from './BavovnaCoverImageBlock.module.scss';

const BavovnaCoverImageBlock = () => (
  <article className={styles.bavovnaCoverImageBlock} data-testid="BavovnaCoverImageBlock">
    <section className={styles.bavovnaCoverImageBlock__imageLineSection}>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/1.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/2.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/3.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/4.jpg' alt='a pice of big image of cotton plant'/>
    </section>
    <section className={styles.bavovnaCoverImageBlock__imageLineSection}>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/5.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/6.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/7.jpg' alt='a pice of big image of cotton plant'/>
      <img loading='lazy' className={styles.bavovnaCoverImageBlock__image} src='/img/images/Bavovna/8.jpg' alt='a pice of big image of cotton plant'/>
    </section>
  </article>
);

export default BavovnaCoverImageBlock;
