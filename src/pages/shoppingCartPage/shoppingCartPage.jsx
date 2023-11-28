import React from 'react';
import styles from './shoppingCartPage.module.scss';
import LeftArrowIcon from '../../components/svg/leftArrowIcon/leftArrowIcon';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import {useNavigate} from 'react-router-dom';

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const user = useSelector(getUser());
  console.log(user);
  return (
    <div className={styles.shoppingCartPage} data-testid="ShoppingCartPage">
      <div className={styles.titleBlock}>
        <div className={styles.infoBlock}>
          <p className={styles.title}>shopping bag (0 items)</p>
          <p className={styles.text}>Your shopping bag is empty</p>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/catalogue');
          }}
        >
          <LeftArrowIcon />
          <span>
            Continue Shopping
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
