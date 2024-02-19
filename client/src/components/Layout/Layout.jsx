import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
