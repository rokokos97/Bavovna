import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';
import AccountIcon from '../svg/accountIcon/accountIcon';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerNav}>
          <Link to='/sale'>Sale</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/aboutus'>About us</Link>
          <Link to='/card'>Card</Link>
          <Link to='/catalogue'>Catalogue</Link>
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
            <AccountIcon/>
            <span>
              Account
            </span>
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
