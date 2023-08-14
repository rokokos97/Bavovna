import React from 'react';
import {Header} from '../header';
import MainPage from '../../pages/mainPage/MainPage';
import {Footer} from '../footer';

import styles from './Layout.module.scss';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
        <MainPage />
      </main>
      <Footer />
    </>
  );
};

export {Layout};
