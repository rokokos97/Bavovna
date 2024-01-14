import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import HeaderInput from './HeaderInput/HeaderInput';
import HeaderContent from './HeaderContent/HeaderContent';

// import AccountIcon from '../svg/accountIcon/accountIcon';
// import ShoppingCartIcon from '../svg/shoppingCartIcon/shoppingCartIcon';
// import FavoriteIcon from '../svg/favoriteIcon/favoriteIcon';
// import SearchIcon from '../svg/searchIcon/searchIcon';
// import LogoIcon from '../svg/logoIcon/logoIcon';
import {shallowEqual, useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import {getIsLoggedIn, getUser} from '../../store/userSlice';
import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const cart = useSelector(getCart, shallowEqual);
  const [isSearch, setIsSearch] = useState(false);

  const handleIsSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header className={styles.container} data-testid='Header'>
      {isSearch ? (
        <HeaderInput handleIsSearch={handleIsSearch} />
      ) : (
        <HeaderContent
          navigate={navigate}
          isLoggedIn={isLoggedIn}
          user={user}
          cart={cart}
          handleIsSearch={handleIsSearch}
        />
      )}
    </header>
  );
};

export default Header;
