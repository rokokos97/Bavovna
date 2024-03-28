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
import MenuIcon from '../../svg/MobileIcons/MenuIcon/MenuIcon';
import CloseIcon from '../../svg/MobileIcons/CloseIcon/CloseIcon';

const HeaderContent = ({isLoggedIn, user, cart}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    if (location.pathname !== '/shop' || location.search !== '') {
      setIsSearch(false);
    }
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
            <section
              className={
                isMenu ?
                  `${styles.headerContent__headerBlock} ${styles.active}` :
                  `${styles.headerContent__headerBlock}`
              }
            >
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
                <div className={styles.headerContent__fixedHeaderMenuBar}>
                  <button
                    type='button'
                    className={`${styles.headerContent__headerSearch} ${styles.headerContent__button}`}
                    onClick={handleIsSearch}
                    aria-label='Search for products'
                  >
                    <SearchIcon />
                  </button>
                  <Link
                    to='/cart'
                    aria-label={`View your shopping cart, with ${cart.length} items`}
                    className={`${styles.headerContent__linkBlock} ${styles.headerContent__button}`}
                  >
                    <ShoppingCartIcon />
                    <p
                      className={styles.headerContent_cart}
                    >{`(${cart.length})`}</p>
                  </Link>
                </div>
                <div className={styles.headerContent__floatingHeaderMenuBar}>
                  <Link
                    className={styles.headerContent__button}
                    to={user ? `/user/${user._id}/wishList` : {}}
                    aria-label='View your wishlist'
                  >
                    <EmptyHeartIcon />
                    <p className={styles.headerContent__wishlist}>
                        Wishlist
                    </p>
                  </Link>
                  <Link
                    to={user ? '/user/' + user._id : '/signIn'}
                    aria-label={
                      isLoggedIn && user ?
                        `View ${user.firstName}'s account` :
                        'Log in to your account'
                    }
                    className={`${styles.headerContent__linkBlock} ${styles.headerContent__button}`}
                  >
                    <AccountIcon />
                    <p className={styles.headerContent__accountName}>
                      {isLoggedIn && user ? user.firstName : 'account'}
                    </p>
                  </Link>
                </div>
              </nav>
            </section>
            <button
              type='button'
              onClick={() => setIsMenu(!isMenu)}
              className={styles.mobileButton}
            >
              {isMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div
              className={
                isMenu ?
                  `${styles.headerContent__mobileHeaderBlock} ${styles.active}` :
                  `${styles.headerContent__mobileHeaderBlock}`
              }
            ></div>
          </section>
          <Link
            className={styles.headerContent__logo}
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
