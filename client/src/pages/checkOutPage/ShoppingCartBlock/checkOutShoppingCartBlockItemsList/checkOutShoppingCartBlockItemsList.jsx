import React from 'react';
import styles from './checkOutShoppingCartBlockItemsList.module.scss';
import {useSelector} from 'react-redux';
import ProductCardInCart from '../../../../components/productCardInCart/productCardInCart';
import {getNormalizedCart} from '../../../../store/cartSlice';

const CheckOutShoppingCartBlockItemsList = () => {
  const normalizeCart = useSelector(getNormalizedCart);
  return (
    <div className={styles.checkOutShoppingCartBlockItemsList} data-testid="CheckOutShoppingCartBlockItemsList">
      {normalizeCart && normalizeCart.map((item, index)=> (
        <ProductCardInCart item={item} key={index} type='1'/>
      ))}
    </div>
  );
};

export default CheckOutShoppingCartBlockItemsList;
