import React from 'react';
import styles from './MobileBreadcrumbsNavigation.module.scss';
import ChevronUp from '../../svg/ChevronUp/ChevronUp';
import PropTypes from 'prop-types';
const MobileBreadcrumbsNavigation = ({handleSideNavigationClose}) => {
  return (
    <button
      onClick={()=>handleSideNavigationClose()}
      className={styles.mobileBreadcrumbsNavigation__navigation}
    >
      <ChevronUp />BACK
    </button>
  );
};

MobileBreadcrumbsNavigation.propTypes = {
  handleSideNavigationClose: PropTypes.func,
};
export default MobileBreadcrumbsNavigation;
