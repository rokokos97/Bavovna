import React from 'react';
import styles from './loader.module.scss';

const Loader = () => (
  <div className={styles.loader} data-testid="Loader">
    LOADING...
  </div>
);

export default Loader;
