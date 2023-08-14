import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import MainPage from '../../pages/MainPage/MainPage';
import {Footer} from '../footer';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <MainPage />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export {Layout};
