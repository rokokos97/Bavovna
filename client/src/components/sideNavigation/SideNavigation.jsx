import React, {useState} from 'react';
import styles from './SideNavigation.module.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import useDeviceDetect from '../../utils/useDeviceDetect';
import ChevronUp from '../svg/ChevronUp/ChevronUp';
import Page404 from '../../pages/Page404/Page404';
import CompleteOrderPage from '../../pages/CompleteOrderPage/CompleteOrderPage';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation/BreadcrumbsNavigation';

const SideNavigation = ({options, navOptions}) => {
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
    <section className={styles.navigationBlock} >
      {!hideContentSide && <BreadcrumbsNavigation options={navOptions} handleSideNavigationClose={handleSideNavigationClose}/>}
      <nav
        style={{display: hideSideNav ? 'none': 'flex'}}
        className={styles.navigationBlock__sidebar}
      >
        {/* {!isMobile && <h2 className={styles.navigationBlock__title}>my account</h2>}*/}
        <ul className={styles.navigationBlock__list}>
          {options.map((option) => (
            <li
              key={option.path}
              onClick={isMobile ? ()=> {
                setHideSideNav(true);
                setHideContentSide(false);
              } : null }
            >
              <button
                onClick={()=> navigate(option.path)}
                className={styles.navigationBlock__button}>
                {option.label}
                <div className={styles.navigationBlock__chevron}>
                  <ChevronUp />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={styles.navigationBlock__navigationContentSide}
        style={{display: hideContentSide ? 'none': 'flex'}}
      >
        <Routes>
          {options.map((option) => (
            <Route
              key={option.path}
              path={option.path}
              element={option.element}
            />
          ))}
          <Route path="*" element={<Page404/>}/>
          <Route path="order/:id" element={<CompleteOrderPage />} />
        </Routes>
      </div>
    </section>
  );
};

SideNavigation.propTypes = {
  options: PropTypes.array,
  navOptions: PropTypes.array,
};
export default SideNavigation;
