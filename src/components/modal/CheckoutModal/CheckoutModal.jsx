import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../svg/closeIcon/CloseIcon';
import {useData} from '../../../Providers/CardMasterProvider';
import TrashIcon from '../../svg/trashIcon/trashIcon';
import styles from './CheckoutModal.module.scss';

const CheckoutModal = ({handleCloseModal}) => {
  // const {itemData, setItemData, collectData} = useData();
  // const {itemData, setItemData} = useData();
  const {itemData} = useData();
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
        <div className={styles.trash}>
          <TrashIcon />
        </div>
      </div>
    </section>
  );
};

CheckoutModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default CheckoutModal;
