import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';
import {useDataCard} from '../../../../Providers/CardMasterProvider';
import styles from './CheckoutModal.module.scss';
import ArrowBackIcon from '../../../svg/arrowBackIcon/arrowBackIcon';

const CheckoutModal = ({handleCloseModal}) => {
  const {itemData} = useDataCard();
  const {itemName, itemPrice, itemColor, itemSize, itemImg, itemQuantity} =
    itemData;

  const [quantity, setQuantity] = useState(itemQuantity);

  const handleSub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const calcPrice = () => {
    return itemPrice * quantity;
  };

  return (
    <section className={styles.checkout} data-testid='CheckoutModal'>
      <div className={styles.closeIcon} onClick={handleCloseModal}>
        <CloseIcon />
      </div>
      <h2>The item was successfully added to your bag!</h2>
      <div className={styles.checkoutContainer}>
        <img src={itemImg} alt='model' />
        <div className={styles.checkoutContent}>
          <p className={styles.name}>{itemName}</p>
          <pre className={styles.priceBlock}>
            {calcPrice().toFixed(2)}&nbsp;
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
              <div className={styles.quantityBlock}>
                <button
                  className={styles.quantityBtn}
                  type='button'
                  onClick={handleSub}
                >
                  -
                </button>
                {quantity}
                <button
                  className={styles.quantityBtn}
                  type='button'
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          type='button'
          className={styles.continueBtn}
          onClick={handleCloseModal}
        >
          <ArrowBackIcon />
          <span>Сontinue shopping</span>
        </button>
        <button type='button' className={styles.checkoutBtn}>
          <span>Check out</span>
        </button>
      </div>
    </section>
  );
};

CheckoutModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default CheckoutModal;
