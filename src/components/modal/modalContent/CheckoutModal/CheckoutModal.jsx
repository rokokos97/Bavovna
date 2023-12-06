import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../../svg/closeIcon/CloseIcon';
import {useDataCard} from '../../../../Providers/CardMasterProvider';
import styles from './CheckoutModal.module.scss';
import ArrowBackIcon from '../../../svg/arrowBackIcon/arrowBackIcon';
import {Link} from 'react-router-dom';

const CheckoutModal = ({handleCloseModal}) => {
  const {itemData} = useDataCard();
  const {itemName, discountPrice, itemColor, itemSize, itemImg, itemQuantity} =
    itemData;

  // const [currentQuantity, setCurrentQuantity] = useState(itemQuantity);
  // const [currentPrice, setCurrentPrice] = useState(itemPrice);

  // const handleSub = () => {
  //   if (currentQuantity > 1) {
  //     setCurrentQuantity(currentQuantity - 1);
  //     setCurrentPrice(+(parseFloat(currentPrice - itemPrice).toFixed(2)));
  //   }
  // };

  // const handleAdd = () => {
  //   setCurrentQuantity(currentQuantity + 1);
  //   setCurrentPrice(+((parseFloat(currentPrice) + parseFloat(itemPrice)).toFixed(2)));
  // };

  // const handleCheckout = () => {
  //   handleCloseModal();
  //   const checkoutData = {
  //     itemId: _id,
  //     name: itemName,
  //     price: currentPrice,
  //     chosenColorId: itemColor,
  //     chosenSizeId: itemSize,
  //     quantity: itemQuantity,
  //   };
  //   console.log(checkoutData);
  // };

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
            {parseFloat(discountPrice).toFixed(2)}&nbsp;
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
                {/* <button
                  className={styles.quantityBtn}
                  type='button'
                  onClick={handleSub}
                >
                  -
                </button> */}
                {itemQuantity}
                {/* <button
                  className={styles.quantityBtn}
                  type='button'
                  onClick={handleAdd}
                >
                  +
                </button> */}
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
