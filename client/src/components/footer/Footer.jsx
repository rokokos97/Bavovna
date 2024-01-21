import React from 'react';
import {Link} from 'react-router-dom';
import InstagrammIcon from '../svg/instagrammIcon/instagrammIcon';
import FacebookIcon from '../svg/facebookIcon/facebookIcon';
import TiktokIcon from '../svg/tiktokIcon/tiktokIcon';
import styles from './Footer.module.scss';
import {useSelector} from 'react-redux';
import {getCategories} from '../../store/categorySlice';

const Footer = () => {
  const categories = useSelector(getCategories());

  function getCategoryId(categoryName) {
    if (categories) {
      return categories.filter((category) => category.name === categoryName)[0]._id;
    }
  };

  return (
    <footer className={styles.container} data-testid='Footer'>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <div className={styles.footerContact}>
              <h3>Contact</h3>
              <div className={styles.footerList}>
                <Link to='tel:+380441234567'>1-888-963-8944</Link>
                <Link to='mailto:help@email.com'>help@email.com</Link>
                <Link to='/'>Contact Us</Link>
              </div>
            </div>
            <div className={styles.footerShop}>
              <h3>Shop</h3>
              <div className={styles.footerList}>
                <Link to='/shop?status=sale'>Sale</Link>
                <Link to='/shop?status=new'>New</Link>
                <Link to={`/shop?status=${getCategoryId('t-shirts')}`}>T-Shirts</Link>
                <Link to={`/shop?status=${getCategoryId('dresses')}`}>Dresses</Link>
                <Link to={`/shop?status=${getCategoryId('pants')}`}>Pants</Link>
                <Link to={`/shop?status=${getCategoryId('skirts')}`}>Skirts</Link>
              </div>
            </div>
            <div className={styles.footerHelp}>
              <h3>Help</h3>
              <div className={styles.footerList}>
                <Link to='/help/delivery'>Delivery information</Link>
                <Link to='/help/return'>Return information</Link>
                <Link to='/help/payment'>Payment</Link>
                <Link to='/help/faq'>FAQ</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerTopRight}>
            <Link to='/'>Logo</Link>
            <div className={styles.socialList}>
              <Link to='/' className={styles.socialListItem}>
                <InstagrammIcon />
              </Link>
              <Link to='/' className={styles.socialListItem}>
                <FacebookIcon />
              </Link>
              <Link to='/' className={styles.socialListItem}>
                <TiktokIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p className={styles.footerBottomItem}>
              © 2023 Bavovna | All Rights Reserved
            </p>
            <div
              className={`${styles.footerBottomItem} ${styles.footerBottomLink}`}
            >
              <Link to='/help/cookies'>Cookies settings</Link>
            </div>
            <div className={styles.footerBottomItem}>
              <Link to='/help/privacy'>Privacy policy</Link>
            </div>
          </div>
          <div className={styles.footerBottomRight}>
            <img src='/img/svg/liqpay.png' alt='liqpay' />
            <img src='/img/svg/mastercard.svg' alt='mastercard' />
            <img src='/img/svg/visa.svg' alt='visa' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
