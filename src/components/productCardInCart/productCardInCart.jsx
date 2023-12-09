import React from 'react';
import styles from './productCardInCart.module.scss';
import DeleteIcon from '../svg/deleteIcon/deleteIcon';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {addItemToCart, removeItemFromCart, removeOneItemFromCart} from '../../store/cartSlice';

const ProductCardInCart = ({item}) => {
  const dispatch = useDispatch();
  const handleItemDelete = () => {
    dispatch(removeItemFromCart(item.itemIdentifier));
  };
  const handleQuantityAdd = () => {
    dispatch(addItemToCart({...item, itemQuantity: 1}));
  };
  const handleQuantityLess = () => {
    dispatch(removeOneItemFromCart(item.itemIdentifier));
  };
  return (
    <div className={styles.productCardInCart} data-testid="ProductCardInCart">
      <div className={styles.infoBlock}>
        <div className={styles.image}>
          <img src={item.itemImg} alt='item picture'/>
        </div>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{item.itemName}</p>
          <p className={(item.discountPrice===item.itemPrice)? styles.price : styles.discount}
          >
            <span>
              {item.itemPrice} $
            </span>
            <span>
              {(item.discountPrice===item.itemPrice) ? '' : item.discountPrice + '$'}
            </span>
          </p>
          <div className={styles.titleBlockLine}>
            <div>
              <p>size: </p>
              <p>{item.itemSize}</p>
            </div>
            <div>
              <p>color:</p>
              <div style={{'backgroundColor': `${item.itemColor}`}} className={styles.colorRectangle}></div>
            </div>
            <div>
              <p>quantity:</p>
              <div>
                <button
                  onClick={handleQuantityLess}
                  className={styles.button}>
                  -
                </button>
                <p>
                  {item.itemQuantity}
                </p>
                <button
                  onClick={handleQuantityAdd}
                  className={styles.button}>
                  +
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleItemDelete}
        className={styles.deleteButton}>
        <DeleteIcon />
      </div>
    </div>
  );
};

ProductCardInCart.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ProductCardInCart;
