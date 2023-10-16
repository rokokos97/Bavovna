import React from 'react';
import styles from './userPage.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import ItemPreviewCard from '../../components/ItemPreviewCard/ItemPreviewCard';

const UserPage = () => {
  const user = useSelector(getUser());
  return (
    <div className={styles.userPage} data-testid="UserPage">
      <div className={styles.sideMenu}>
        <div>
          <ul>
            <li>home /</li>
            <li>my account</li>
          </ul>
          <p>my account</p>
        </div>
        <ul>
          <li>orders</li>
          <li>wishlist</li>
          <li>personal data</li>
          <li><span>exit</span></li>
        </ul>
      </div>
      <div className={styles.wishList}>
        <p>wish list</p>
        <section>
          {
            user && user.favorite.map((item)=> <ItemPreviewCard key={item} id={item}/>)
          }
        </section>
        <div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
