import React from 'react';
import styles from './sideNavigation.module.scss';
import ExitString from '../exitString/exitString';
import {Route, Routes, useNavigate} from 'react-router-dom';
import OrdersBlock from '../../blocks/ordersBlock/ordersBlock';
import WishListBlock from '../../blocks/wishListBlock/wishListBlock';
import UserDataForm from '../../pages/userDataFormPage/userDataForm';
import Page404 from '../../pages/page404/page404';

const SideNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navigationBlock} data-testid="SideNavigation">
      <div className={styles.sidebar}>
        <p className={styles.navigation}>Home / My account</p>
        <p className={styles.title}>my account</p>
        <ul className={styles.list}>
          <li onClick={()=>{
            navigate('');
          }}>orders</li>
          <li
            onClick={()=>{
              navigate(`wishList`);
            }}
          >wish list</li>
          <li
            onClick={()=>{
              navigate('personalData');
            }}
          >personal data</li>
          <li><ExitString/></li>
        </ul>
      </div>
      <div className={styles.navigationContentSide}>
        <Routes>
          <Route index element={<OrdersBlock/>}/>
          <Route path="wishList" element={<WishListBlock/>}/>
          <Route path="personalData" element={<UserDataForm/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </div>
  );
};


export default SideNavigation;
