import React from 'react';
import styles from './userPage.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import Navigation from '../../components/navigation/navigation';
import OrdersBlock from '../../blocks/ordersBlock/ordersBlock';
import ItemsList from '../../components/itemsList/itemsList';


const UserPage = () => {
  const user = useSelector(getUser());
  const sections = [
    {
      label: 'orders',
      content: <OrdersBlock/>,
    },
    {
      label: 'wish list',
      content: <section>{user && <ItemsList idArray={user.favorite}/>}</section>,
    },
    {
      label: 'personal data',
      content: <p>Personal data</p>,
    },
    {
      label: 'exit',
      content: '',
    },
  ];
  return (
    <div className={styles.userPage} data-testid="UserPage">
      <ul>
        <li>Home /</li>
        <li>My account</li>
      </ul>
      <Navigation sections={sections}/>
    </div>
  );
};
export default UserPage;
