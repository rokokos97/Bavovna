import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import {useSelector} from 'react-redux';
import {getCart} from '../store/cartSlice';
import sessionStorageService from '../services/sessionStorage.service';
import styles from './App.module.scss';
import AppLoader from '../hoc/appLoader';
import GuestRoutes from '../hoc/guestRoutes';

// Importing page components
import Card from '../pages/card/Card';
import AboutUsPage from '../pages/aboutUsPage/AboutUsPage';
import MainPage from '../pages/mainPage/MainPage';
import SalePage from '../pages/salePage/salePage';
import ShopPage from '../pages/shopPage/shopPage';
import Page404 from '../pages/page404/page404';
import HelpPage from '../pages/helpPage/HelpPage';
import UserPage from '../pages/userPage/userPage';
import ShoppingCartPage from '../pages/shoppingCartPage/shoppingCartPage';
import CheckOutPage from '../pages/checkOutPage/checkOutPage';
import OrderSuccessPage from '../pages/orderSuccessPage/orderSuccessPage';
import LoginLayout from '../pages/loginLayoutPage/LoginLayout';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  const cart = useSelector(getCart);
  // Effect for updating session storage when cart changes
  useEffect(() => {
    if (cart.length !== 0) {
      sessionStorageService.setCurrentCart(cart);
    }
  }, [cart]);
  return (
    <div className={styles.App}>
      <AppLoader>
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* Main page route */}
              <Route index element={<MainPage />} />
              {/* Routes for various pages in the application */}
              <Route path='sale' element={<SalePage />} />
              <Route path='shop' element={<ShopPage />} />
              <Route path='aboutus' element={<AboutUsPage />} />
              <Route path='cart/checkout' element={<CheckOutPage />} />
              <Route path='orderSuccess' element={<OrderSuccessPage />} />
              <Route path='cart' element={<ShoppingCartPage />} />
              <Route path='shop/:id' element={<Card />} />
              {/* Nested routes for user authentication */}
              <Route path='login/*' element={<GuestRoutes><LoginLayout/></GuestRoutes>}/>
              {/* Additional routes for various functionalities */}
              <Route path='main' element={<MainPage />} />
              <Route path='help/*' element={<HelpPage />} />
              <Route path='user/:id/*' element={<UserPage />} />
              {/* Fallback route for unmatched paths */}
              <Route path='*' element={<Page404 />} />
            </Route>
          </Routes>
        </SearchContext.Provider>
      </AppLoader>
    </div>
  );
}
export default App;
