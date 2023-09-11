import React from 'react';
import {Link} from 'react-router-dom';
import TopHeader from './TopHeader';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <TopHeader />
      <div className={styles.header}>
        <div className={styles.headerNav}>
          <Link to='/sale'>
            <span>Sale</span>
          </Link>
          <Link to='/shop'>
            <span>Shop</span>
          </Link>
          <Link to='/aboutus'>
            <span>About us</span>
          </Link>
          <Link to='/card'>
            <span>Card</span>
          </Link>
          <Link to='/catalogue'>
            <span>Catalogue</span>
          </Link>
        </div>
        <div className={styles.headerLogo}>Logo</div>
        <div className={styles.headerMenuBar}>
          <div className={styles.headerSearch}>
            <input></input>
            <span className='material-symbols-outlined'>search</span>
          </div>
          <Link to=''>
            <span className='material-symbols-outlined'>shopping_cart</span>
          </Link>
          <Link to='/login'>
            <span className='material-symbols-outlined'>person</span>
          </Link>
          <Link to=''>
            <div className={styles.headerLang}>
              <span className='material-symbols-outlined'>language</span>
              <span>Eng</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export {Header};
