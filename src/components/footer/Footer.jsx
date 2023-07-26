import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__left">
          <div className="footer-help">
            <h3>Help</h3>
            <div className="footer-contacts">
              <Link to="tel:+380441234567">+38 (044) 123-45-67</Link>
              <Link to="mailto:help@email.com">help@email.com</Link>
              <Link to="/">FAQ/Contact Us</Link>
            </div>
          </div>
          <div className="footer-shop">
            <h3>Shop</h3>
            <div className="footer-shop__list">
              <Link to="/">Shorts</Link>
              <Link to="/">Pants</Link>
              <Link to="/">T-Shirts</Link>
              <Link to="/">Tops</Link>
              <Link to="/">SALE</Link>
            </div>
          </div>
        </div>
        <div className="footer-top__right">
          <Link to="/">Logo</Link>
          <div className="social-list">
            <Link to="/" className="social-list__item">
              <img src="/img/svg/instagram.svg" alt="instagram icon" />
            </Link>
            <Link to="/" className="social-list__item">
              <img src="/img/svg/facebook.svg" alt="facebook icon" />
            </Link>
            <Link to="/" className="social-list__item">
              <img src="/img/svg/tik-tok.svg" alt="tik-tok icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__left">
          <p>© 2023 Bavovna | All Rights Reserved</p>
        </div>
        <div className="footer-bottom__right">
          <img src="/img/svg/liqpay.png" alt="liqpay" />
          <img src="/img/svg/mastercard.svg" alt="mastercard" />
          <img src="/img/svg/visa.svg" alt="visa" />
        </div>
      </div>
    </footer>
  );
};

export {Footer};
