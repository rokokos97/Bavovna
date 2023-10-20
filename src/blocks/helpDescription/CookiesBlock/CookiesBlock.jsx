import React from 'react';
import styles from './CookiesBlock.module.scss';

const CookiesBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>Cookies settings</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
    </>
  );
};

export default CookiesBlock;
