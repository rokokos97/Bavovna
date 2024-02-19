import React from 'react';
import styles from './PolicyBlock.module.scss';

const PolicyBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>Privacy policy</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
    </>
  );
};

export default PolicyBlock;
