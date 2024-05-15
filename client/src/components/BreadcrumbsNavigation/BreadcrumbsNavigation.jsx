import React, {useState} from 'react';
import styles from './BreadcrumbsNavigation.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ChevronUp from '../svg/ChevronUp/ChevronUp';

const BreadcrumbsNavigation = (setHideContentSide ) => {
  const [hideSideNav, setHideSideNav] = useState(false);
  console.log(hideSideNav);
  const handleClick = () => {
    setHideSideNav(false);
    setHideContentSide(true);
  };
  return (
    <section className={styles.breadcrumbsNavigation} data-testid="BreadcrumbsNavigation">
      <nav
        className={styles.navigationBlock__navigation}>
        <button
          className={styles.navigationBlock__navigation__buttonHome}
          onClick={handleClick}
        >
          <div>
            <ChevronUp/>
          </div>
          Back
        </button>
        <Link
          className={styles.navigationBlock__navigationHome}
          to={'/'}
        >
          <ChevronUp/>
          Home&nbsp;
        </Link>
        <Link
          className={styles.navigationBlock__navigationAccount}
          to={''}
        >
          / My account
        </Link>
      </nav>
    </section>
  );
};

BreadcrumbsNavigation.propTypes = {
  setHideSideNav: PropTypes.func,
  setHideContentSide: PropTypes.func,
  hideSideNav: PropTypes.bool,
};
export default BreadcrumbsNavigation;
