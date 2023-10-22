import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AsideHelpBlock from '../../blocks/AsideHelpBlock/AsideHelpBlock';
import DeliveryBlock from '../../blocks/helpDescription/DeliveryBlock/DeliveryBlock/DeliveryBlock';
import ReturnBlock from '../../blocks/helpDescription/ReturnBlock/ReturnBlock';
import PaymentBlock from '../../blocks/helpDescription/PaymentBlock/PaymentBlock';
import FaqBlock from '../../blocks/helpDescription/FaqBlock/FaqBlock';
import PolicyBlock from '../../blocks/helpDescription/PolicyBlock/PolicyBlock';
import CookiesBlock from '../../blocks/helpDescription/CookiesBlock/CookiesBlock';
import styles from './HelpPage.module.scss';
// import {useState} from 'react';

const HelpPage = () => {
  // const [activeHelp, setActiveHelp] = useState(0);

  // const handleActiveHelp = (helpId) => setActiveHelp(helpId);

  return (
    <div className={styles.helpPage}>
      <div className={styles.helpAside}>
        <AsideHelpBlock />
      </div>
      <div className={styles.helpDescription}>
        <Routes>
          <Route isActive path='delivery' element={<DeliveryBlock />} />
          <Route path='return' element={<ReturnBlock />} />
          <Route path='payment' element={<PaymentBlock />} />
          <Route path='faq' element={<FaqBlock />} />
          <Route path='cookies' element={<CookiesBlock />} />
          <Route path='privacy' element={<PolicyBlock />} />
        </Routes>
      </div>
    </div>
  );
};

export default HelpPage;
