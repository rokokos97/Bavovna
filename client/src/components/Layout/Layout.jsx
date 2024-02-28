import React from 'react';
import {Outlet} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Header from '../header/Header';
import Ticker from '../Ticker/Ticker';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Marquee className={styles.marqueeContainer} autoFill={true}>
        <Ticker />
      </Marquee>
      <Footer />
    </>
  );
};

export default Layout;
