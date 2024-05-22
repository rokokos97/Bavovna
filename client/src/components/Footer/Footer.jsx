import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Footer.module.scss';
import {useSelector} from 'react-redux';
import {getCategories} from '../../store/categorySlice';
import LogoIcon from '../svg/LogoIcon/LogoIcon';
import TikTokIcon from '../svg/socialMediaIcons/TikTokIcon/TikTokIcon';
import FacebookIcon from '../svg/socialMediaIcons/FacebookIcon/FacebookIcon';
import InstagramIcon from '../svg/socialMediaIcons/InstagramIcon/InstagramIcon';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categories = useSelector(getCategories);
  const navigateToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  function getCategoryId(categoryName) {
    if (categories) {
      return categories.filter((category) => category.name === categoryName)[0]
          ._id;
    }
  }
  return (
    <footer className={styles.container} data-testid='Footer'>
      <article className={styles.footer}>
        <section className={styles.footerTop}>
          <section className={styles.footerTopLeft}>
            <section className={styles.footerContact}>
              <h3>Contact</h3>
              <nav className={styles.footerList}>
                <Link
                  to='tel:+1-888-963-8944'
                  aria-label='Contact us by phone'
                >1-888-963-8944</Link>
                <Link
                  to='mailto:bavovna19@gmail.com'
                  aria-label='Contact us by email'
                >
                  bavovna19@gmail.com
                </Link>
                <Link
                  to='mailto:help@bavovna.space'
                  aria-label='Contact us by email'
                >
                  Contact Us
                </Link>
                <Link to='/creators' aria-label='Learn about the project team'>
                  Project team
                </Link>
              </nav>
            </section>
            <section className={styles.footerShop}>
              <h3>Shop</h3>
              <nav className={styles.footerList}>
                <Link to='/shop?status=sale' aria-label='Shop sale items'>
                  Sale
                </Link>
                <Link to='/shop?status=new' aria-label='Shop new items'>
                  New
                </Link>
                <Link
                  to={`/shop?status=${getCategoryId('t-shirts')}`}
                  aria-label='Shop t-shirts category'
                >
                  T-Shirts
                </Link>
                <Link
                  to={`/shop?status=${getCategoryId('dresses')}`}
                  aria-label='Shop dresses category'
                >
                  Dresses
                </Link>
                <Link
                  to={`/shop?status=${getCategoryId('pants')}`}
                  aria-label='Shop pants category'
                >
                  Pants
                </Link>
                <Link
                  to={`/shop?status=${getCategoryId('skirts')}`}
                  aria-label='Shop skirts category'
                >
                  Skirts
                </Link>
              </nav>
            </section>
            <section className={styles.footerHelp}>
              <h3>Help</h3>
              <nav className={styles.footerList}>
                <Link
                  to='/help/delivery'
                  aria-label='Learn about delivery options'
                >
                  Delivery information
                </Link>
                <Link to='/help/return' aria-label='Learn about return options'>
                  Return information
                </Link>
                <Link
                  to='/help/payment'
                  aria-label='Learn about payment options'
                >
                  Payment
                </Link>
                <Link to='/help/faq' aria-label='Learn FAQ'>
                  FAQ
                </Link>
              </nav>
            </section>
          </section>
          <section className={styles.footerTopRight}>
            <button
              onClick={navigateToHome}
              type='button'
              aria-label='Return to homepage'
            >
              <LogoIcon />
            </button>
            <nav className={styles.socialList}>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                className={styles.socialListItem}
                rel='noreferrer'
                aria-label='Follow us on Instagram'
              >
                <InstagramIcon />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                className={styles.socialListItem}
                rel='noreferrer'
                aria-label='Follow us on Facebook'
              >
                <FacebookIcon />
              </a>
              <a
                href='https://www.tiktok.com/'
                target='_blank'
                className={styles.socialListItem}
                rel='noreferrer'
                aria-label='Follow us on TikTok'
              >
                <TikTokIcon />
              </a>
            </nav>
          </section>
        </section>
        <section className={styles.footerBottom}>
          <section className={styles.footerBottomLeft}>
            <p className={styles.footerBottomItem}>
              © 2024 Bavovna | All Rights Reserved
            </p>
            <nav
              className={`${styles.footerBottomItem} ${styles.footerBottomCookies}`}
            >
              <Link to='/help/cookies' aria-label='Learn about cookies'>
                Cookies settings
              </Link>
            </nav>
            <div className={styles.footerBottomItem}>
              <Link to='/help/privacy' aria-label='Learn about privacy'>
                Privacy policy
              </Link>
            </div>
          </section>
          <section className={styles.footerBottomRight}>
            <img
              src='/img/svg/liqpay.png'
              width='71'
              height='15'
              loading='lazy'
              alt='liqpay logo image'
            />
            <img
              src='/img/svg/mastercard.svg'
              width='71'
              height='15'
              alt='mastercard logo image'
              loading='lazy'
            />
            <img
              src='/img/svg/visa.svg'
              alt='visa logo image'
              width='71'
              height='15'
              loading='lazy' />
          </section>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
