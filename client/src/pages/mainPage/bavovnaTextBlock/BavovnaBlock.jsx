import React from 'react';
import styles from './BavovnaBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const BavovnaBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.bavovnaBlock} data-testid="BavovnaBlock">
      <div className={styles.title}>
        <p>BAVOVNA IS A UKRAINIAN BRAND of</p>
        <p>sustainable clothes</p>
      </div>
      <span className={styles.content}>
        We are dedicated to bringing you a wide range of sustainable
        products that help reduce your ecological footprint without compromising on quality or style.
      </span>
      <button
        className={styles.button}
        onClick={()=> navigate(('/catalogue'))}>
        <span>
          shop now
        </span>
      </button>
    </div>
  );
};

export default BavovnaBlock;
