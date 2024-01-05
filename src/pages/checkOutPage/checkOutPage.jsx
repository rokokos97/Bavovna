import React, {useState} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
const CheckOutPage = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const [userCurrentDelivery, setUserCurrentDelivery] = useState('1');
  const selectedValue = (id) => {
    console.log(id);
    setSelectedDeliveryMethod(id);
  };
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPage">
      <CheckOutUserInfoBlock
        selectedValue={selectedValue}
        selectedDeliveryMethod={selectedDeliveryMethod}
        userCurrentDelivery={userCurrentDelivery}
        setUserCurrentDelivery={setUserCurrentDelivery}/>
      <CheckOutShoppingCartBlock
        selectedDeliveryMethod={selectedDeliveryMethod}
        userCurrentDelivery={userCurrentDelivery}
      />
    </div>
  );
};

export default CheckOutPage;
