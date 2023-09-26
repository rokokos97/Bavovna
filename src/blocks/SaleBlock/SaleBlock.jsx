import React from 'react';
import styles from './SaleBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const SaleBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.saleBlock} data-testid="SaleBlock">
      <div className={styles.contentBlock}>
        <span className={styles.title}>summer sale</span>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/catalogue');
          }}
        >
          <span>shop now</span>
        </button>
      </div>

    </div>
  );
};

export default SaleBlock;
