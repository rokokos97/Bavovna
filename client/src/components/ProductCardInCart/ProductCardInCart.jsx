import React from 'react';
import styles from './ProductCardInCart.module.scss';
import DeleteIcon from '../svg/DeleteIcon/DeleteIcon';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, getCart, removeItemFromCart, removeOneItemFromCart} from '../../store/cartSlice';
import {clearCartSessionStorage} from '../../services/sessionStorage.service';

const ProductCardInCart = ({item, type}) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const handleItemDelete = () => {
    if (cart.length === 1) {
      clearCartSessionStorage();
    }
    dispatch(removeItemFromCart(item.itemIdentifier));
  };
  const handleQuantityAdd = () => {
    dispatch(addItemToCart({...item, itemQuantity: 1}));
  };
  const handleQuantityLess = () => {
    if (cart.length === 1) {
      clearCartSessionStorage();
    }
    dispatch(removeOneItemFromCart(item.itemIdentifier));
  };

  return (
    <div className={styles.productCardInCart} data-testid="ProductCardInCart" type={type}>
      <div className={styles.productCardInCart__imageBlock}>
        <img src={item.itemImg} alt='item picture'/>
      </div>
      <div className={styles.productCardInCart__infoBlock}>
        <section className={styles.productCardInCart__namePriceBlock}>
          <p className={styles.productCardInCart__name}>{item.itemName}</p>
          <p className={(item.discountPrice===item.itemPrice)? styles.productCardInCart__price : styles.productCardInCart__discount}>
            <span>
              {item.itemPrice} ₴
            </span>
            <span>
              {(item.discountPrice===item.itemPrice) ? '' : item.discountPrice + ' ₴'}
            </span>
          </p>
        </section>
        <section className={styles.productCardInCart__sizeColorQuantityDeleteBlock}>
          <div className={styles.productCardInCart__sizeColorQuantityBlock}>
            <div className={styles.productCardInCart__sizeBlock}>
              <p>size: </p>
              <p>{item.itemSize}</p>
            </div>
            <div className={styles.productCardInCart__colorBlock}>
              <p>color:</p>
              <div style={{'backgroundColor': `${item.itemColor}`}} className={styles.productCardInCart__colorRectangle}></div>
            </div>
            <div className={styles.productCardInCart__quantityBlock}>
              <p>quantity:</p>
              <div className={styles.productCardInCart__quantity}>
                <button
                  onClick={handleQuantityLess}
                  className={styles.productCardInCart__button}>
                        -
                </button>
                <p>
                  {item.itemQuantity}
                </p>
                <button
                  onClick={handleQuantityAdd}
                  className={styles.productCardInCart__button}>
                        +
                </button>
              </div>
            </div>
          </div>
          <div className={styles.productCardInCart__buttonBlock}>
            <button
              onClick={handleItemDelete}
              className={styles.productCardInCart__buttonDelete}
            >
              <DeleteIcon />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

ProductCardInCart.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string,
};
export default ProductCardInCart;
