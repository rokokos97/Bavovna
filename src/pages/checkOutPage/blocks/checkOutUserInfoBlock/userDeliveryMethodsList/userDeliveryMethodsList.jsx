import React from 'react';
import styles from './userDeliveryMethodsList.module.scss';
import deliveryMethodsList from '../../../../../utils/deliveryMethodsList';
import ListWithRadioButtons from '../../../../../components/listWithRadioButtons/listWithRadioButtons';

const UserDeliveryMethodsList = () => {
  return (
    <div className={styles.userDeliveryMethodsList} data-testid="UserDeliveryMethodsList">
      <ListWithRadioButtons options={deliveryMethodsList} isList={false} hideButton={true}/>
    </div>
  );
};
export default UserDeliveryMethodsList;
