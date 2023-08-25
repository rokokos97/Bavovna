import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../pages/card/Card';
import AboutUsPage from '../pages/aboutUs/AboutUsPage';
import './App.module.css';
import AppLoader from '../hoc/appLoader';
import LoginLayout from '../components/LoginLayout/LoginLayout';
import MainPage from '../pages/mainPage/MainPage';
import SalePage from '../pages/salePage/salePage';
import ShopPage from '../pages/shopPage/shopPage';
import NotFoundPage from '../pages/notFoundPage/notFoundPage';

function App() {
  return (
    <div className='App'>
      <AppLoader>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='sale' element={<SalePage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='aboutus' element={<AboutUsPage />} />
            <Route path='card' element={<Card searchingId={'0'} />} />
            <Route path='login/*' element={<LoginLayout />} />
            <Route path='main' element={<MainPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppLoader>
    </div>
  );
}

export default App;
