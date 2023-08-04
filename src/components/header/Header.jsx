import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <Link to="/">Sale</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/card">Card</Link>
      </div>
      <div className="header-logo">Logo</div>
      <div className="header-menuBar">
        <div className="header-search">
          <input></input>
          <span className="material-symbols-outlined">search</span>
        </div>
        <Link to="">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <Link to="/login">
          <span className="material-symbols-outlined">person</span>
        </Link>
        <Link to="">
          <div className="header-lang">
            <span className="material-symbols-outlined">language</span>
            <span>Eng</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export {Header};
