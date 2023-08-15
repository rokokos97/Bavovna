import React from 'react';
import styles from './NewsLettersBlock.module.scss';

const NewsLettersBlock = () => (
  <div className={styles.newsLettersBlock} data-testid="NewsLettersBlock">
    <span className={styles.title}>
      Newsletter
    </span>
    <span className={styles.content}>
        SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS
        AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE
    </span>
    <input />
  </div>
);

export default NewsLettersBlock;
