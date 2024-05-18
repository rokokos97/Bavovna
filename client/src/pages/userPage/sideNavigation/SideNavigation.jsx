import React, {useState} from 'react';
import styles from './SideNavigation.module.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import OrdersBlock from './OrdersBlock/OrdersBlock';
import WishListBlock from './WishListBlock/WishListBlock';
import Page404 from '../../Page404/Page404';
import UserPersonalDataBlock from './userPersonalDataBlock/UserPersonalDataBlock';
import CompleteOrderPage from '../../CompleteOrderPage/CompleteOrderPage';
import ChevronUp from '../../../components/svg/ChevronUp/ChevronUp';
import useDeviceDetect from '../../../utils/useDeviceDetect.js';
import LogOutBlock from './LogOut/LogOutBlock';
import BreadcrumbsNavigation from '../../../components/breadcrumbsNavigation/BreadcrumbsNavigation';

const SideNavigation = () => {
  const navigate = useNavigate();
  const {isMobile} = useDeviceDetect();
  const [hideSideNav, setHideSideNav] = useState(false);
  const [hideContentSide, setHideContentSide] = useState(isMobile || false);
  const handleSideNavigationClose = () => {
    if (isMobile) {
      setHideSideNav(false);
      setHideContentSide(true);
    }
  };
  return (
    <section className={styles.navigationBlock} data-testid="SideNavigation">
      {!hideContentSide && <BreadcrumbsNavigation handleSideNavigationClose={handleSideNavigationClose}/>}
      <nav
        style={{display: hideSideNav ? 'none': 'flex'}}
        className={styles.navigationBlock__sidebar}
      >
        {!isMobile && <h2 className={styles.navigationBlock__title}>my account</h2>}
        <ul className={styles.navigationBlock__list}>
          <li
            onClick={isMobile ? ()=> {
              setHideSideNav(true);
              setHideContentSide(false);
            } : null }
          >
            <button
              onClick={()=> navigate('')}
              className={styles.navigationBlock__button}>
              orders
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
          <li
            onClick={isMobile ? ()=> {
              setHideSideNav(true);
              setHideContentSide(false);
            } : null }
          >
            <button
              onClick={()=> navigate('wishList')}
              className={styles.navigationBlock__button}>
              wish list
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
          <li
            onClick={isMobile ? ()=> {
              setHideSideNav(true);
              setHideContentSide(false);
            } : null }
          >
            <button
              onClick={()=> navigate('personalData')}
              className={styles.navigationBlock__button}>
              personal data
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
          <li
            onClick={isMobile ? ()=> {
              setHideSideNav(true);
              setHideContentSide(false);
            } : null }
          >
            <button
              name = 'exit'
              onClick={()=> navigate('logOut')}
              className={styles.navigationBlock__button}>
              exit
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={styles.navigationBlock__navigationContentSide}
        style={{display: hideContentSide ? 'none': 'flex'}}
      >
        <Routes>
          <Route index element={<OrdersBlock/>}/>
          <Route path="wishList" element={<WishListBlock/>}/>
          <Route path="personalData" element={<UserPersonalDataBlock/>}/>
          <Route path="order/:id" element={<CompleteOrderPage />} />
          <Route path="logOut" element={<LogOutBlock />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </section>
  );
};


export default SideNavigation;
