import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../svg/closeIcon/CloseIcon';
import {useData} from '../../../Providers/CardMasterProvider';
import styles from './CheckoutModal.module.scss';

const CheckoutModal = ({handleCloseModal}) => {
  // const {itemData, setItemData, collectData} = useData();
  const {itemData} = useData();
  const {itemName, itemPrice, itemColor, itemSize, itemImg, itemQuantity} =
    itemData;

  return (
    <section className={styles.checkout}>
      <div className={styles.closeIcon} onClick={handleCloseModal}>
        <CloseIcon />
      </div>
      <h2>The item was successfully added to your bag!</h2>
      <div className={styles.checkoutContainer}>
        <img src={itemImg} alt='model' />
        <div className={styles.checkoutContent}>
          <p className={styles.name}>{itemName}</p>
          <pre className={styles.priceBlock}>
            {itemPrice}&nbsp;
            <span>$</span>
          </pre>
          <div className={styles.dataBlock}>
            <div className={styles.paramsBlock}>
              <span>Size:</span>
              {itemSize}
            </div>
            <div className={styles.paramsBlock}>
              <span>Color:</span>
              <div
                className={styles.coloredSquare}
                style={{backgroundColor: `${itemColor}`}}
              ></div>
            </div>
            <div className={styles.paramsBlock}>
              <span>Quantity:</span>
              <button type='button'>-</button>
              {itemQuantity}
              <button type='button'>+</button>
            </div>
          </div>
        </div>
        <div className={styles.removeBasket}></div>
      </div>
    </section>
  );
};

CheckoutModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default CheckoutModal;
