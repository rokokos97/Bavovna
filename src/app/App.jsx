import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {SalePage} from '../pages/salePage';
import {ShopPage} from '../pages/shopPage';
import {Layout} from '../components/layout/Layout';
import {Card} from '../pages/card';
import {AboutUsPage} from '../pages/aboutUs';
import './App.module.css';
import '../components/header/Header.module.css';
import '../pages/card/Card.module.css';
import '../components/footer/Footer.module.css';
import AppLoader from '../hoc/appLoader';
import LoginLayout from '../components/LoginLayout/LoginLayout';
import NotFoundPage from '../pages/notFoundPage/notFoundPage';
import MainPage from '../pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <AppLoader>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SalePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="card" element={<Card searchingId={'1'} />} />
            <Route path="login/*" element={<LoginLayout />} />
            <Route path='main' element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppLoader>
    </div>
  );
}

export default App;
