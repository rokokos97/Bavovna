import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../pages/card/Card';
import AboutUsPage from '../pages/aboutUsPage/AboutUsPage';
import styles from './App.module.scss';
import AppLoader from '../hoc/appLoader';
import MainPage from '../pages/mainPage/MainPage';
import SalePage from '../pages/salePage/salePage';
import ShopPage from '../pages/shopPage/shopPage';
import Catalogue from '../pages/catalogue/Catalogue';
import Page404 from '../pages/page404/page404';
import HelpPage from '../pages/helpPage/HelpPage';
import UserPage from '../pages/userPage/userPage';
import GuestRoutes from '../hoc/guestRoutes';
import ShoppingCartPage from '../pages/shoppingCartPage/shoppingCartPage';
import {useSelector} from 'react-redux';
import sessionStorageService from '../services/sessionStorage.service';
import {getCart} from '../store/cartSlice';
import CheckOutPage from '../pages/checkOutPage/checkOutPage';
import LoginLayout from '../pages/loginLayoutPage/LoginLayout';

function App() {
  const cart = useSelector(getCart);
  useEffect(() => {
    if (cart.length !== 0) {
      sessionStorageService.setCurrentCart(cart);
    }
  }, [cart]);
  return (
    <div className={styles.App}>
      <AppLoader>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='sale' element={<SalePage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='aboutus' element={<AboutUsPage />} />
            <Route path='catalogue' element={<Catalogue />} />
            <Route path='cart/checkout' element={<CheckOutPage />} />
            <Route path='cart' element={<ShoppingCartPage/>}/>
            <Route path='catalogue/:id' element={<Card />} />
            <Route path='login/*' element={<GuestRoutes><LoginLayout/></GuestRoutes>}/>
            <Route path='main' element={<MainPage />} />
            <Route path='help/*' element={<HelpPage />} />
            <Route path='user/:id/*' element={<UserPage />}/>
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </AppLoader>
    </div>
  );
}

export default App;
