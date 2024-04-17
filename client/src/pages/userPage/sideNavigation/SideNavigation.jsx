import React, {useState} from 'react';
import styles from './SideNavigation.module.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import OrdersBlock from './OrdersBlock/OrdersBlock';
import WishListBlock from './WishListBlock/WishListBlock';
import Page404 from '../../Page404/Page404';
import UserPersonalDataBlock from './userPersonalDataBlock/UserPersonalDataBlock';
import CompleteOrderPage from '../../CompleteOrderPage/CompleteOrderPage';
import {userLogOut} from '../../../store/userSlice';
import {useDispatch} from 'react-redux';
import ChevronUp from '../../../components/svg/ChevronUp/ChevronUp';
import ExitIcon from '../../../components/svg/ExitIcon/ExitIcon';

const SideNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hideSideNav, setHideSideNav] = useState(false);
  const handleLogOut = () => {
    dispatch(userLogOut());
    navigate('/');
  };

  return (
    <section className={styles.navigationBlock} data-testid="SideNavigation">
      <nav
        style={{display: hideSideNav ? 'none': 'flex'}}
        className={styles.navigationBlock__sidebar}
      >
        <h2 className={styles.navigationBlock__title}>my account</h2>
        <ul className={styles.navigationBlock__list}>
          <li
            onClick={()=> isMobile && setHideSideNav(true)}
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
          <li>
            <button
              onClick={()=> navigate('wishList')}
              className={styles.navigationBlock__button}>
              wish list
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={()=> navigate('personalData')}
              className={styles.navigationBlock__button}>
              personal data
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className={styles.navigationBlock__button}>
              exit
              <div className={styles.navigationBlock__chevron}>
                <ChevronUp />
              </div>
              <div className={styles.navigationBlock__exitIcon}><ExitIcon/></div>
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={styles.navigationBlock__navigationContentSide}
        style={{display: hideSideNav ? 'flex': 'none'}}
      >
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
