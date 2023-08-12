import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import MainPage from '../../pages/MainPage/MainPage';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <MainPage />
      </main>
      <Footer />
    </>
  );
};

export {Layout};
