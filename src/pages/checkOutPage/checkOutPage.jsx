import React, {useState} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
const CheckOutPage = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const [userCurrentDelivery, setUserCurrentDelivery] = useState('1');
  const [totalPrice, setTotalPrice] = useState(0);

  const selectedValue = (id) => {
    setSelectedDeliveryMethod(id);
  };
  const handleTotalPriceChange = (price) => {
    setTotalPrice(price);
  };
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
