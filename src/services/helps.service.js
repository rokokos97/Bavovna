import React from 'react';
import CookiesBlock from '../blocks/helpDescription/CookiesBlock/CookiesBlock';
import DeliveryBlock from '../blocks/helpDescription/DeliveryBlock/DeliveryBlock/DeliveryBlock';
import FaqBlock from '../blocks/helpDescription/FaqBlock/FaqBlock';
import ReturnBlock from '../blocks/helpDescription/ReturnBlock/ReturnBlock';
import PaymentBlock from '../blocks/helpDescription/PaymentBlock/PaymentBlock';
import PolicyBlock from '../blocks/helpDescription/PolicyBlock/PolicyBlock';

export const helps = [
  {id: 0, name: 'Delivery information', description: <DeliveryBlock />},
  {id: 1, name: 'Return information', description: <ReturnBlock />},
  {id: 2, name: 'Payment', description: <PaymentBlock />},
  {id: 3, name: 'FAQ', description: <FaqBlock />},
  {id: 4, name: 'Cookies settings', description: <CookiesBlock />},
  {id: 5, name: 'Privacy policy', description: <PolicyBlock />},
];
