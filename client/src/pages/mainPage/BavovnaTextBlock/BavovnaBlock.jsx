import React from 'react';
import styles from './BavovnaBlock.module.scss';
import {Link} from 'react-router-dom';

const BavovnaBlock = () => {
  return (
    <article className={styles.bavovnaBlock} data-testid="BavovnaBlock">
      <header className={styles.bavovnaBlock__titleBox}>
        <h2 className={styles.bavovnaBlock__title2}>bavovna is a ukrainian brand of</h2>
        <h2 className={styles.bavovnaBlock__title2}>sustainable clothes</h2>
      </header>
      <p className={styles.bavovnaBlock__content}>
        We are dedicated to bringing you a wide range of sustainable
        products that help reduce your ecological footprint without compromising on quality or style.
      </p>
      <Link
        to='/shop'
        className={styles.bavovnaBlock__button}>
        <span>
          shop now
        </span>
      </Link>
    </article>
  );
};

export default BavovnaBlock;
