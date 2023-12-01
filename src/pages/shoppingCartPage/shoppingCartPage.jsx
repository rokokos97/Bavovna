import React from 'react';
import styles from './shoppingCartPage.module.scss';
import LeftArrowIcon from '../../components/svg/leftArrowIcon/leftArrowIcon';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import ProductCardInCart from '../../components/productCardInCart/productCardInCart';

const ShoppingCartPage = () => {
  const cart = useSelector(getCart());
  console.log(cart);
  const navigate = useNavigate();
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
      <div>
        {
          cart.map((item) => <ProductCardInCart key={item._id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default ShoppingCartPage;
