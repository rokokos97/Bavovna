import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart } from '../store/cartSlice';
import sessionStorageService from '../services/sessionStorage.service';
import styles from './App.module.scss';
import AppLoader from '../hoc/appLoader';
import GuestRoutes from '../hoc/guestRoutes';
import Layout from '../components/Layout/Layout';
import Card from '../pages/card/Card';
import AboutUsPage from '../pages/aboutUsPage/AboutUsPage';
import MainPage from '../pages/mainPage/MainPage';
import ShopPage from '../pages/shopPage/shopPage';
import Page404 from '../pages/Page404/Page404';
import HelpPage from '../pages/HelpPage/HelpPage';
import UserPage from '../pages/userPage/UserPage';
import ShoppingCartPage from '../pages/shoppingCartPage/ShoppingCartPage';
import OrderSuccessPage from '../pages/OrderSuccessPage/OrderSuccessPage';
import LoginLayout from '../pages/loginLayoutPage/LoginLayout';
import CreatorsPage from '../pages/CreatorsPage/CreatorsPage';
import CheckOutPageUserInfo from '../pages/checkOutPage/userContactDetailsPage/CheckOutPageUserInfo';
import CheckOutPageDeliveryInfo from '../pages/checkOutPage/checkOutPageDelivery/CheckOutPageDeliveryInfo';
import CheckOutPagePaymentInfo from '../pages/checkOutPage/checkOutPagePayment/CheckOutPagePaymentInfo';
import UnsubscribePage from '../pages/UnsubscribePage/UnsubscribePage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  const cart = useSelector(getCart);
  useEffect(() => {
    if (cart.length !== 0) {
      sessionStorageService.setCurrentCart(cart);
    }
  }, [cart]);
  const payPalKey = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  return (
    <div className={styles.App}>
      <AppLoader>
        <PayPalScriptProvider
          options={{
            'client-id': payPalKey,
            currency: 'USD',
          }}
        >
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="creators" element={<CreatorsPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="aboutus" element={<AboutUsPage />} />
                <Route path="cart/checkoutUserInfo" element={<CheckOutPageUserInfo />} />
                <Route path="cart/checkoutDelivery" element={<CheckOutPageDeliveryInfo />} />
                <Route path="cart/checkoutPayment" element={<CheckOutPagePaymentInfo />} />
                <Route path="orderSuccess" element={<OrderSuccessPage />} />
                <Route path="cart" element={<ShoppingCartPage />} />
                <Route path="shop/:id" element={<Card />} />
                <Route
                  path="signIn/*"
                  element={
                    <GuestRoutes>
                      <LoginLayout />
                    </GuestRoutes>
                  }
                />
                <Route path="main" element={<MainPage />} />
                <Route path="help/*" element={<HelpPage />} />
                <Route path="user/:id/*" element={<UserPage />} />
                <Route path="unsubscribe" element={<UnsubscribePage />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </SearchContext.Provider>
        </PayPalScriptProvider>
      </AppLoader>
    </div>
  );
}
export default App;
