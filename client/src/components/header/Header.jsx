import React from 'react';
import HeaderContent from './HeaderContent/HeaderContent';
import { shallowEqual, useSelector } from 'react-redux';
import { getCart } from '../../store/cartSlice';
import { getIsLoggedIn, getUser } from '../../store/userSlice';
import styles from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const cart = useSelector(getCart, shallowEqual);

  return (
    <header className={styles.container} data-testid="Header">
      <HeaderContent isLoggedIn={isLoggedIn} user={user} cart={cart} />
    </header>
  );
};

export default Header;
