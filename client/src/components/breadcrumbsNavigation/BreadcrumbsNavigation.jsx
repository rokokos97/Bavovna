import React from 'react';
import DesktopBreadcrumbsNavigation from './DesktopBreadcrumbsNavigation/DesktopBreadcrumbsNavigation';
import MobileBreadcrumbsNavigation from './MobileBreadcrumbsNavigation/MobileBreadcrumbsNavigation';
import PropTypes from 'prop-types';
import useDeviceDetect from '../../utils/useDeviceDetect';

const BreadcrumbsNavigation = ({options, handleSideNavigationClose}) => {
  const {isMobile} = useDeviceDetect();
  return (
    !isMobile ? <DesktopBreadcrumbsNavigation
      options={options}
    /> : <MobileBreadcrumbsNavigation
      handleSideNavigationClose={handleSideNavigationClose}
    />);
};

BreadcrumbsNavigation.propTypes = {
  options: PropTypes.array,
  handleSideNavigationClose: PropTypes.func,
};
export default BreadcrumbsNavigation;
