import React from 'react';
import styles from './NewCollectionBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const NewCollectionBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.newCollectionBlock} data-testid="NewCollectionBlock">
      <div className={styles.newCollectionBlock__wrapper}>
        <p className={styles.newCollectionBlock__title}>
            new collection
        </p>
        <p className={styles.newCollectionBlock__manifest}>
            Together, we can transform the way we consume
            and create a brighter, greener future for generations to come
        </p>
        <button
          className={styles.button}
          onClick={()=>{
            navigate('/catalogue');
          }}
        >
          <span>shop now</span>
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default NewCollectionBlock;
