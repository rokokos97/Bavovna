import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../header';
import {Footer} from '../footer';

import styles from './Layout.module.scss';

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

export {Layout};
