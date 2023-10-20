import React from 'react';
import styles from './sideNavigation.module.scss';
import ExitString from '../exitString/exitString';
import {Route, Routes, useNavigate} from 'react-router-dom';
import OrdersBlock from '../../blocks/ordersBlock/ordersBlock';
import WishListBlock from '../../blocks/wishListBlock/wishListBlock';
import UserDataForm from '../userDataForm/userDataForm';
import Page404 from '../page404/page404';

const SideNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navigationBlock} data-testid="SideNavigation">
      <div className={styles.sidebar}>
        <p className={styles.navigation}>Home / My account</p>
        <p className={styles.title}>my account</p>
        <div className={styles.list}>
          <p onClick={()=>{
            navigate('');
          }}>orders</p>
          <p
            onClick={()=>{
              navigate(`wishList`);
            }}
          >wish list</p>
          <p
            onClick={()=>{
              navigate('personalData');
            }}
          >personal data</p>
          <p><ExitString/></p>
        </div>
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
