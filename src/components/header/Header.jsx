import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import styles from './Header.module.scss';
import AccountIcon from '../svg/accountIcon/accountIcon';
import ShoppingCartIcon from '../svg/shoppingCartIcon/shoppingCartIcon';
import FavoriteIcon from '../svg/favoriteIcon/favoriteIcon';
import SearchIcon from '../svg/searchIcon/searchIcon';
import {useSelector} from 'react-redux';
import {getIsLoggedIn, getUser} from '../../store/userSlice';
import LogoIcon from '../svg/logoIcon/logoIcon';
import {getCart} from '../../store/cartSlice';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const user = useSelector(getUser());
  const cart = useSelector(getCart());
  return (
    <header className={styles.container} data-testid='Header'>
      <div className={styles.banner}>
        <Link to='/catalogue'>
          <span>10% discount on the summer collection</span>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.headerNavBar}>
          <Link to='/catalogue'>
            <span>Sale</span>
          </Link>
          <Link to='/catalogue'>
            <span>Shop</span>
          </Link>
          <Link to='/aboutus'>
            <span>About us</span>
          </Link>
          <Link to='/catalogue'>
            <span>Catalogue</span>
          </Link>
          <Link to='/help/delivery'>
            <span>Help</span>
          </Link>
        </div>
        <Link to='/'>
          <LogoIcon />
        </Link>
        <div className={styles.headerMenuBar}>
          <button type='button' className={styles.headerSearch}>
            {/* <input name='search'></input> */}
            <SearchIcon />
          </button>
          <button
            onClick={()=>(user? navigate(`/user/${user._id}/wishList`):{})}
          >
            <FavoriteIcon />
          </button>
          <button
            onClick={()=>(navigate('/cart'))}
          >
            <ShoppingCartIcon />
            <p>{`(${cart.length})`}</p>
          </button>
          <button
            onClick={()=>(user? navigate('/user/'+ user._id):navigate('/login'))}
          >
            <AccountIcon />
            <span>{isLoggedIn && user ? user.firstName : 'account'}</span>
          </button>
          <div>
            <button style={{fontWeight: 'bold'}}>
              eng
            </button>
            <button>
              укр
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
