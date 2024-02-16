import React from 'react';
import CookiesBlock from '../blocks/helpDescription/cookiesBlock/CookiesBlock';
import DeliveryBlock from '../blocks/helpDescription/deliveryBlock/DeliveryBlock/DeliveryBlock';
import FaqBlock from '../blocks/helpDescription/faqBlock/FaqBlock';
import ReturnBlock from '../blocks/helpDescription/returnBlock/ReturnBlock';
import PaymentBlock from '../blocks/helpDescription/paymentBlock/PaymentBlock';
import PolicyBlock from '../blocks/helpDescription/policyBlock/PolicyBlock';

export const helps = [
  {id: 0, path: 'delivery', name: 'Delivery information', description: <DeliveryBlock />},
  {id: 1, path: 'return', name: 'Return information', description: <ReturnBlock />},
  {id: 2, path: 'payment', name: 'Payment', description: <PaymentBlock />},
  {id: 3, path: 'faq', name: 'FAQ', description: <FaqBlock />},
  {id: 4, path: 'cookies', name: 'Cookies settings', description: <CookiesBlock />},
  {id: 5, path: 'privacy', name: 'Privacy policy', description: <PolicyBlock />},
];
