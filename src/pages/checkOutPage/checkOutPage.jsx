import React, {useEffect, useState} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
const CheckOutPage = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const [userCurrentDelivery, setUserCurrentDelivery] = useState('1');
  const [totalPrice, setTotalPrice] = useState(0);

  const selectedValue = (id) => {
    setSelectedDeliveryMethod(id);
  };
  const handleTotalPriceChange = (price) => {
    setTotalPrice(price);
  };
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPage">
      <CheckOutUserInfoBlock
        totalPrice={totalPrice}
        selectedValue={selectedValue}
        selectedDeliveryMethod={selectedDeliveryMethod}
        userCurrentDelivery={userCurrentDelivery}
        setUserCurrentDelivery={setUserCurrentDelivery}/>
      <CheckOutShoppingCartBlock
        selectedDeliveryMethod={selectedDeliveryMethod}
        userCurrentDelivery={userCurrentDelivery}
        onTotalPriceChange={handleTotalPriceChange}
      />
    </div>
  );
};

export default CheckOutPage;
