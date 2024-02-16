import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import AsideHelpBlock from '../../blocks/asideHelpBlock/AsideHelpBlock';
import DeliveryBlock from '../../blocks/helpDescription/deliveryBlock/DeliveryBlock/DeliveryBlock';
import ReturnBlock from '../../blocks/helpDescription/returnBlock/ReturnBlock';
import PaymentBlock from '../../blocks/helpDescription/paymentBlock/PaymentBlock';
import FaqBlock from '../../blocks/helpDescription/faqBlock/FaqBlock';
import PolicyBlock from '../../blocks/helpDescription/policyBlock/PolicyBlock';
import CookiesBlock from '../../blocks/helpDescription/cookiesBlock/CookiesBlock';
import styles from './HelpPage.module.scss';

const HelpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    const defaultLink = 'delivery';
    if (location.pathname === '/help' && selectedLink !== defaultLink) {
      setSelectedLink(defaultLink);
      navigate(defaultLink);
    }
  }, [location, selectedLink, navigate]);

  return (
    <div className={styles.helpPage}>
      <p className={styles.navigation}>Home / Help</p>
      <div className={styles.helpPageContainer}>
        <div className={styles.helpAside}>
          <AsideHelpBlock />
        </div>
        <div className={styles.helpDescription}>
          <Routes>
            <Route path='delivery' element={<DeliveryBlock />} />
            <Route path='return' element={<ReturnBlock />} />
            <Route path='payment' element={<PaymentBlock />} />
            <Route path='faq' element={<FaqBlock />} />
            <Route path='cookies' element={<CookiesBlock />} />
            <Route path='privacy' element={<PolicyBlock />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
