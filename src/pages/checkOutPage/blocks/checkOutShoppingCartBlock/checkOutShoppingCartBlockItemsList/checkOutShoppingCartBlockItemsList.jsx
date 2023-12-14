import React from 'react';
import styles from './checkOutShoppingCartBlockItemsList.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getNormalizedCart, removeItemFromCart} from '../../../../../store/cartSlice';
import DeleteIcon from '../../../../../components/svg/deleteIcon/deleteIcon';

const CheckOutShoppingCartBlockItemsList = () => {
  const dispatch = useDispatch();
  const normalizeCart = useSelector(getNormalizedCart());
  const handleItemDelete = (itemIdentifier) => {
    dispatch(removeItemFromCart(itemIdentifier));
  };
  return (
    <div className={styles.checkOutShoppingCartBlockItemsList} data-testid="CheckOutShoppingCartBlockItemsList">

      {normalizeCart && normalizeCart.map((item, index)=> (
        <div
          key={item._id+index}
          className={styles.card}>
          <div className={styles.image}>
            <img src={item.itemImg} alt='item picture'/>
          </div>
          <div className={styles.infoBlock}>
            <p>{item.itemName}</p>
            <div className={styles.itemInfoBlock}>
              <div className={styles.line}>
                <p>size: </p>
                <p>{item.itemSize}</p>
              </div>
              <div className={styles.line}>
                <p>quantity: </p>
                <p>{item.itemQuantity}</p>
              </div>
              <div className={styles.line}>
                <p>color: </p>
                <div style={{'backgroundColor': `${item.itemColor}`}} className={styles.colorRectangle}></div>
              </div>
              <div className={styles.line}>
                <p className={(item.discountPrice===item.itemPrice)? styles.price : styles.discount}
                >
                  <span>
                    {item.itemPrice} $
                  </span>
                  <span>
                    {(item.discountPrice===item.itemPrice) ? '' : item.discountPrice + '$'}
                  </span>
                </p>
                <div
                  onClick={()=>handleItemDelete(item.itemIdentifier)}
                  className={styles.deleteButton}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default CheckOutShoppingCartBlockItemsList;
