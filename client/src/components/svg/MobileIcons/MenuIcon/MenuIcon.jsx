import React from 'react';
import style from './MenuIcon.module.scss';

const MenuIcon = () => {
  return (
    <div className={style.menuIcon}>
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7H5M19 1H1M19 13H1"
          stroke="#040404"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
