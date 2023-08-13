import React from 'react';
import styles from './NewCollectionBlock.module.scss';

const NewCollectionBlock = () => {
  return (
    <div className={styles.newCollectionBlock} data-testid="NewCollectionBlock">
      <p className={styles.newCollectionBlock__title}>
          new collection
      </p>
      <p className={styles.newCollectionBlock__manifest}>
          Together, we can transform the way we consume
          and create a brighter, greener future for generations to come
      </p>
      <button className={styles.buttons}>
        <span className={styles.buttonText}>shop now</span>
      </button>
    </div>
  );
};

export default NewCollectionBlock;
