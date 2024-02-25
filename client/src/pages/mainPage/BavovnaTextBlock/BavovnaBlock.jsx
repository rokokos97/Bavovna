import React from 'react';
import styles from './BavovnaBlock.module.scss';
import {Link} from 'react-router-dom';

const BavovnaBlock = () => {
  return (
    <artical className={styles.bavovnaBlock} data-testid="BavovnaBlock">
      <header className={styles.titleBox}>
        <h2 className={styles.title2}>bavovna is a ukrainian brand of</h2>
        <h2 className={styles.title2}>sustainable clothes</h2>
      </header>
      <p className={styles.content}>
        We are dedicated to bringing you a wide range of sustainable
        products that help reduce your ecological footprint without compromising on quality or style.
      </p>
      <Link
        to='/shop'
        className={styles.button}>
        <span>
          shop now
        </span>
      </Link>
    </artical>
  );
};

export default BavovnaBlock;
