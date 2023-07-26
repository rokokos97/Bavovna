import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Salepage} from './pages/Salepage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Aboutuspage} from './pages/Aboutuspage';
import {Shoppage} from './pages/Shoppage';
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
          <Route index element={<Salepage />} />
          <Route path="shop" element={<Shoppage />} />
          <Route path="aboutus" element={<Aboutuspage />} />
          <Route path="card" element={<Card />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
