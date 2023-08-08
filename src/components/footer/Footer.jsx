import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <div className={styles.footerHelp}>
            <h3>Help</h3>
            <div className={styles.footerContacts}>
              <Link to="tel:+380441234567">+38 (044) 123-45-67</Link>
              <Link to="mailto:help@email.com">help@email.com</Link>
              <Link to="/">FAQ/Contact Us</Link>
            </div>
          </div>
          <div className={styles.footerShop}>
            <h3>Shop</h3>
            <div className={styles.footerShopList}>
              <Link to="/">Shorts</Link>
              <Link to="/">Pants</Link>
              <Link to="/">T-Shirts</Link>
              <Link to="/">Tops</Link>
              <Link to="/">SALE</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerTopRight}>
          <Link to="/">Logo</Link>
          <div className={styles.socialList}>
            <Link to="/" className={styles.socialListItem}>
              <img src="/img/svg/instagram.svg" alt="instagram icon" />
            </Link>
            <Link to="/" className={styles.socialListItem}>
              <img src="/img/svg/facebook.svg" alt="facebook icon" />
            </Link>
            <Link to="/" className={styles.socialListItem}>
              <img src="/img/svg/tik-tok.svg" alt="tik-tok icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          <p>© 2023 Bavovna | All Rights Reserved</p>
        </div>
        <div className={styles.footerBottomRight}>
          <img src="/img/svg/liqpay.png" alt="liqpay" />
          <img src="/img/svg/mastercard.svg" alt="mastercard" />
          <img src="/img/svg/visa.svg" alt="visa" />
        </div>
      </div>
    </footer>
  );
};

export {Footer};
