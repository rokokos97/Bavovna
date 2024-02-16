/* eslint-disable max-len */
import React from 'react';
import styles from './facebookIcon.module.scss';

const FacebookIcon = () => {
  return (
    <>
      <svg
        className={styles.facebookIcon}
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.491 18.3285H22.8409L23.3669 14.9047H19.4903V13.0334C19.4903 11.6111 19.9522 10.3499 21.2746 10.3499H23.3996V7.36196C23.0263 7.31124 22.2366 7.2002 20.7446 7.2002C17.629 7.2002 15.8024 8.85557 15.8024 12.6269V14.9047H12.5996V18.3285H15.8024V27.7391C16.4367 27.8351 17.0792 27.9002 17.7387 27.9002C18.3348 27.9002 18.9166 27.8454 19.491 27.7672V18.3285Z'
          fill='#FAFAFA'
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
