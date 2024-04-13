import React from 'react';
import styles from './SideNavigation.module.scss';
import ExitString from '../../../components/ExitString/ExitString';
import {Link, Route, Routes} from 'react-router-dom';
import OrdersBlock from './OrdersBlock/OrdersBlock';
import WishListBlock from './WishListBlock/WishListBlock';
import Page404 from '../../Page404/Page404';
import UserPersonalDataBlock from './userPersonalDataBlock/UserPersonalDataBlock';
import CompleteOrderPage from '../../CompleteOrderPage/CompleteOrderPage';

const SideNavigation = () => {
  return (
    <section className={styles.navigationBlock} data-testid="SideNavigation">
      <nav className={styles.navigationBlock__sidebar}>
        <h2 className={styles.navigationBlock__title}>my account</h2>
        <ul className={styles.navigationBlock__list}>
          <li>
            <Link to={''}>orders</Link>
          </li>
          <li>
            <Link to={'wishList'}>wish list</Link>
          </li>
          <li>
            <Link
              to={'personalData'}>
            personal data
            </Link>
          </li>
          <li><ExitString/></li>
        </ul>
      </nav>
      <div className={styles.navigationBlock__navigationContentSide}>
        <Routes>
          <Route index element={<OrdersBlock/>}/>
          <Route path="wishList" element={<WishListBlock/>}/>
          <Route path="personalData" element={<UserPersonalDataBlock/>}/>
          <Route path="order/:id" element={<CompleteOrderPage />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </section>
  );
};


export default SideNavigation;
