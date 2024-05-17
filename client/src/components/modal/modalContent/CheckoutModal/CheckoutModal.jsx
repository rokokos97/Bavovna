import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../../svg/CloseIcon/CloseIcon';
import {useDataCard} from '../../../../providers/CardMasterProvider';
import styles from './CheckoutModal.module.scss';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '../../../svg/arrowIcons/ArrowBackIcon/ArrowBackIcon';

const CheckoutModal = ({handleCloseModal}) => {
  const {itemData} = useDataCard();
  const {itemName, discountPrice, itemColor, itemSize, itemImg, itemQuantity} =
    itemData;

  return (
    <section className={styles.checkout} data-testid='CheckoutModal'>
      <button type='button' aria-label='close modal window' className={styles.closeIcon} onClick={handleCloseModal}>
        <CloseIcon />
      </button>
      <h2>The item was successfully added to your bag!</h2>
      <div className={styles.checkoutContainer}>
        <img src={itemImg} alt='model' />
        <div className={styles.checkoutContent}>
          <p className={styles.name}>{itemName}</p>
          <pre className={styles.priceBlock}>
            {parseFloat(discountPrice).toFixed(2)}&nbsp;
            <span>₴</span>
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
                {itemQuantity}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.continueBtn}
          type='button'
          aria-label='continue shopping'
          onClick={handleCloseModal}
        >
          <ArrowBackIcon />
          <span>Continue shopping</span>
        </button>
        <Link
          to='/cart'
          className={styles.checkoutBtn}
          onClick={handleCloseModal}
        >
          <span>Check out</span>
        </Link>
      </div>
    </section>
  );
};

CheckoutModal.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default CheckoutModal;
