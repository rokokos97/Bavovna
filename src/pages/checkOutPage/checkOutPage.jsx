import React, {useState} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
import deliveryMethodsList from '../../utils/deliveryMethodsList';
const CheckOutPage = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const [promoCode, setPromoCode] = useState(null);
  const deliveryPrice = deliveryMethodsList[1][selectedDeliveryMethod].price;
  const selectedValue = (id)=> {
    setSelectedDeliveryMethod(id);
  };
  const selectedPromoCode = (promoCode) => {
    setPromoCode(promoCode);
  };
  console.log('promoCode', promoCode);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPage">
      <CheckOutUserInfoBlock
        selectedValue={selectedValue}
        selectedDeliveryMethod={selectedDeliveryMethod}
        promoCode={promoCode}
      />
      <CheckOutShoppingCartBlock deliveryPrice={deliveryPrice} selectedPromoCode={selectedPromoCode}/>
    </div>
  );
};

export default CheckOutPage;
