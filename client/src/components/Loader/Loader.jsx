import React from 'react';
import styles from './Loader.module.scss';
import LoaderIcon from '../svg/loaderIcons/LoaderBigIcon/LoaderIcon';

const Loader = () => (
  <div className={styles.loader} data-testid="Loader">
    <LoaderIcon/>
  </div>
);

export default Loader;
