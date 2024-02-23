import React from 'react';
import CookiesBlock from './CookiesBlock/CookiesBlock';
import DeliveryBlock from './DeliveryBlock/DeliveryBlock';
import FaqBlock from './FaqBlock/FaqBlock';
import ReturnBlock from './ReturnBlock/ReturnBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';
import PolicyBlock from './PolicyBlock/PolicyBlock';

export const helps = [
  {id: 0, path: 'delivery', name: 'Delivery information', description: <DeliveryBlock />},
  {id: 1, path: 'return', name: 'Return information', description: <ReturnBlock />},
  {id: 2, path: 'payment', name: 'Payment', description: <PaymentBlock />},
  {id: 3, path: 'faq', name: 'FAQ', description: <FaqBlock />},
  {id: 4, path: 'cookies', name: 'Cookies settings', description: <CookiesBlock />},
  {id: 5, path: 'privacy', name: 'Privacy policy', description: <PolicyBlock />},
];
