import React from 'react';
import styles from './DesktopBreadcrumbsNavigation.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const DesktopBreadcrumbsNavigation = ({ options }) => {
  return (
    options && (
      <nav className={styles.desktopBreadcrumbsNavigation__navigation}>
        <Link to={'/'}>Home&nbsp;</Link>
        {options.map((option) => {
          return (
            <Link key={option.label} to={option.to}>
              {option.label}&nbsp;
            </Link>
          );
        })}
      </nav>
    )
  );
};

DesktopBreadcrumbsNavigation.propTypes = {
  options: PropTypes.array.isRequired,
};
export default DesktopBreadcrumbsNavigation;
