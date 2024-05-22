import React from 'react';
import CookiesBlock from './CookiesBlock/CookiesBlock';
import DeliveryBlock from './DeliveryBlock/DeliveryBlock';
import FaqBlock from './FaqBlock/FaqBlock';
import ReturnBlock from './ReturnBlock/ReturnBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';
import PolicyBlock from './PolicyBlock/PolicyBlock';

export const helps = [
  {path: 'delivery', label: 'Delivery information', element: <DeliveryBlock />},
  {path: 'return', label: 'Return information', element: <ReturnBlock />},
  {path: 'payment', label: 'Payment', element: <PaymentBlock />},
  {path: 'faq', label: 'FAQ', element: <FaqBlock />},
  {path: 'cookies', label: 'Cookies settings', element: <CookiesBlock />},
  {path: 'privacy', label: 'Privacy policy', element: <PolicyBlock />},
];
