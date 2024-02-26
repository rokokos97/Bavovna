import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoIcon from '../../svg/LogoIcon/LogoIcon';
import AccountIcon from '../../svg/AccountIcon/AccountIcon';
import ShoppingCartIcon from '../../svg/ShoppingCartIcon/ShoppingCartIcon';
import SearchIcon from '../../svg/SearchIcon/SearchIcon';
import styles from './HeaderContent.module.scss';
import HeaderInput from '../HeaderInput/HeaderInput';
import EmptyHeartIcon from '../../svg/favoriteIcons/EmptyHeartIcon/EmptyHeartIcon';

const HeaderContent = ({isLoggedIn, user, cart}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    if (location.pathname !== '/shop' || location.search !== '') setIsSearch(false);
  }, [location]);
  const handleIsSearch = () => {
    setIsSearch(!isSearch);
    if (!isSearch) navigate('./shop');
  };
  return (
    <>
      <section className={styles.headerContent__banner}>
        <Link to='/shop?status=sale_10%'>
          <p>10% discount on the summer collection</p>
        </Link>
      </section>
      {isSearch ? (
        <HeaderInput handleIsSearch={handleIsSearch} />
      ) : (
        <>
          <section className={styles.headerContent__header}>
            <nav className={styles.headerContent__headerNavBar}>
              <Link to='/shop?status=sale'>
                <span>Sale</span>
              </Link>
              <Link to='/shop?status=new'>
                <span>New</span>
              </Link>
              <Link to='/shop'>
                <span>Shop</span>
              </Link>
              <Link to='/aboutus'>
                <span>About us</span>
              </Link>
              <Link to='/help/delivery'>
                <span>Help</span>
              </Link>
            </nav>
            <nav className={styles.headerContent__headerMenuBar}>
              <button
                type='button'
                className={styles.headerContent__headerSearch}
                onClick={handleIsSearch}
                aria-label='Search for products'
              >
                <SearchIcon />
              </button>
              <Link
                to={user ? `/user/${user._id}/wishList`: {}}
                aria-label='View your wishlist'
              >
                <EmptyHeartIcon />
              </Link>
              <Link
                to='/cart'
                aria-label={`View your shopping cart, with ${cart.length} items`}
                className={styles.headerContent__linkBlock}
              >
                <ShoppingCartIcon />
                <p>{`(${cart.length})`}</p>
              </Link>
              <Link
                to={user?('/user/' + user._id) : '/login'}
                aria-label={isLoggedIn && user ? `View ${user.firstName}'s account` : 'Log in to your account'}
                className={styles.headerContent__linkBlock}
              >
                <AccountIcon />
                <p className={styles.accountName}>{isLoggedIn && user ? user.firstName : 'account'}</p>
              </Link>
            </nav>
          </section>
          <Link
            className={styles.logo}
            aria-label='Go to homepage'
            to='/'
          >
            <LogoIcon />
          </Link>
        </>
      )}
    </>
  );
};

HeaderContent.propTypes = {
  user: PropTypes.object,
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
};

export default HeaderContent;
