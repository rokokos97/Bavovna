import React, {useState} from 'react';
import styles from './SideNavigation.module.scss';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import OrdersBlock from './OrdersBlock/OrdersBlock';
import WishListBlock from './WishListBlock/WishListBlock';
import Page404 from '../../Page404/Page404';
import UserPersonalDataBlock from './userPersonalDataBlock/UserPersonalDataBlock';
import CompleteOrderPage from '../../CompleteOrderPage/CompleteOrderPage';
import {userLogOut} from '../../../store/userSlice';
import {useDispatch} from 'react-redux';
import ChevronUp from '../../../components/svg/ChevronUp/ChevronUp';
import ExitIcon from '../../../components/svg/ExitIcon/ExitIcon';
import useDeviceDetect from '../../../utils/useDeviceDetect.js';

const SideNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isMobile} = useDeviceDetect();
  const [hideSideNav, setHideSideNav] = useState(false);
  const [hideContentSide, setHideContentSide] = useState(isMobile || false);
  const handleLogOut = () => {
    dispatch(userLogOut());
    navigate('/');
  };
  console.log('isMobile', isMobile);
  return (
    <section className={styles.navigationBlock} data-testid="SideNavigation">
      <nav
        className={styles.navigationBlock__navigation}>
        <button
          className={styles.navigationBlock__navigation__buttonHome}
          onClick={()=> {
            setHideSideNav(false);
            setHideContentSide(true);
          }}
          style={{display: hideSideNav ? 'flex' : 'none'}}
        >
          <div>
            <ChevronUp/>
          </div>
          Back
        </button>
        <Link
          className={styles.navigationBlock__navigationHome}
          to={'/'}>
          <ChevronUp/>
          Home&nbsp;
        </Link>
        <Link
          li className={styles.navigationBlock__navigationAccount}
          to={''}>
          / My account
        </Link>
      </nav>
      <nav
        style={{display: hideSideNav ? 'none': 'flex'}}
        className={styles.navigationBlock__sidebar}
      >
        <h2 className={styles.navigationBlock__title}>my account</h2>
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
        style={{display: hideContentSide ? 'none': 'flex'}}
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
