import React from 'react';
import OrdersBlock from '../../components/sideNavigation/OrdersBlock/OrdersBlock';
import WishListBlock from '../../components/sideNavigation/WishListBlock/WishListBlock';
import UserPersonalDataBlock from '../../components/sideNavigation/userPersonalDataBlock/UserPersonalDataBlock';
import LogOutBlock from '../../components/sideNavigation/LogOut/LogOutBlock';

export const options = [
  {label: 'orders', path: '', element: <OrdersBlock/>},
  {label: 'wish list', path: 'wishList', element: <WishListBlock/>},
  {label: 'personal data', path: 'personalData', element: <UserPersonalDataBlock/>},
  {label: 'exit', path: 'logOut', element: <LogOutBlock/>},
];
