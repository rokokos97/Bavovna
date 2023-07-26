import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {SalePage} from './pages/salePage';
import {NotFoundPage} from './pages/notFoundPage';
import {AboutUsPage} from './pages/AboutUsPage';
import {ShopPage} from './pages/shopPage';
import {Card} from './pages/Card';

import {Layout} from './components/Layout';

import './styles/App.css';
import './styles/Header.css';
import './styles/Card.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SalePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="card" element={<Card />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
