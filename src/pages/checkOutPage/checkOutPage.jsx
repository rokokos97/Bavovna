import React, {useState} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
import deliveryMethodsList from '../../utils/deliveryMethodsList';
const CheckOutPage = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const deliveryPrice = deliveryMethodsList[1][selectedDeliveryMethod].price;
  const selectedValue = (id)=> {
    setSelectedDeliveryMethod(id);
  };
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPage">
      <CheckOutUserInfoBlock selectedValue={selectedValue}/>
      <CheckOutShoppingCartBlock deliveryPrice={deliveryPrice}/>
    </div>
  );
};

export default CheckOutPage;
