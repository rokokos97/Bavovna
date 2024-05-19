import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
const Marquee= React.lazy(() => import('react-fast-marquee'));
const Header = React.lazy(() => import('../header/Header'));
const Ticker = React.lazy(() => import('../Ticker/Ticker'));
const Footer = React.lazy(() => import('../Footer/Footer.jsx'));

import styles from './Layout.module.scss';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Header />
        <main className={styles.container}>
          <Outlet />
        </main>
        <Marquee className={styles.marqueeContainer} autoFill={true}>
          <Ticker />
        </Marquee>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
