import React from 'react';
import styles from './loader.module.scss';
import LoaderIcon from '../svg/loaderIcon/loaderIcon';

const Loader = () => (
  <div className={styles.loader} data-testid="Loader">
    <LoaderIcon/>
  </div>
);

export default Loader;
