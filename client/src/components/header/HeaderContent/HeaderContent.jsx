import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoIcon from '../../svg/LogoIcon/LogoIcon';
import AccountIcon from '../../svg/AccountIcon/AccountIcon';
import ShoppingCartIcon from '../../svg/ShoppingCartIcon/ShoppingCartIcon';
import SearchIcon from '../../svg/SearchIcon/SearchIcon';
import styles from './HeaderContent.module.scss';
import HeaderInput from '../HeaderInput/HeaderInput';
import EmptyHeartIcon from '../../svg/favoriteIcons/EmptyHeartIcon/EmptyHeartIcon';

const HeaderContent = ({navigate, isLoggedIn, user, cart}) => {
  const location = useLocation();
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
      <div className={styles.banner}>
        <Link to='/shop?status=sale_10%'>
          <span>10% discount on the summer collection</span>
        </Link>
      </div>
      {isSearch ? (
        <HeaderInput handleIsSearch={handleIsSearch} />
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.headerNavBar}>
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
            </div>
            <div className={styles.headerMenuBar}>
              <button
                type='button'
                className={styles.headerSearch}
                onClick={handleIsSearch}
              >
                {/* <input name='search'></input> */}
                <SearchIcon />
              </button>
              <button
                onClick={() =>
                  user ? navigate(`/user/${user._id}/wishList`) : {}
                }
              >
                <EmptyHeartIcon />
              </button>
              <button onClick={() => navigate('/cart')}>
                <ShoppingCartIcon />
                <p>{`(${cart.length})`}</p>
              </button>
              <button
                onClick={() =>
                  user ? navigate('/user/' + user._id) : navigate('/login')
                }
              >
                <AccountIcon />
                <span className={styles.accountName}>{isLoggedIn && user ? user.firstName : 'account'}</span>
              </button>
            </div>
          </div>
          <div className={styles.logo}>
            <Link to='/'>
              <LogoIcon />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

HeaderContent.propTypes = {
  user: PropTypes.object,
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
  navigate: PropTypes.func,
};

export default HeaderContent;
