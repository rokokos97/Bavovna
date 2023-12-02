import React from 'react';
import styles from './productCardInCart.module.scss';
import DeleteIcon from '../svg/deleteIcon/deleteIcon';
import PropTypes from 'prop-types';

const ProductCardInCart = ({item}) => {
  console.log(item);
  return (
    <div className={styles.productCardInCart} data-testid="ProductCardInCart">
      <div className={styles.infoBlock}>
        <div className={styles.image}>
          <img src={item.itemImg} alt='item picture'/>
        </div>
        <div className={styles.titleBlock}>
          <p className={styles.title}>{item.itemName}</p>
          <p className={styles.price}>{item.itemPrice} $</p>
          <div>
            <p>size: </p>
          </div>
        </div>
      </div>
      <div className={styles.deleteButton}>
        <DeleteIcon />
      </div>
    </div>
  );
};

ProductCardInCart.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ProductCardInCart;
