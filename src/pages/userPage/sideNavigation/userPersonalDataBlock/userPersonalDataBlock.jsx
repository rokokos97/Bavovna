import React from 'react';
import styles from './userPersonalDataBlock.module.scss';
import UserDeliveryAddressForm from './userDeliveryBlock/userDeliveryAddressForm/userDeliveryAddressForm';
import UserDataForm from './userPersonalDataForm/userDataForm';
import UserDeliveryBlock from './userDeliveryBlock/userDeliveryBlock';

const UserPersonalDataBlock = () => {
  return (
    <div className={styles.userPersonalDataBlock} data-testid="UserPersonalDataBlock">
      <UserDataForm/>
      <UserDeliveryBlock/>
      <UserDeliveryAddressForm/>
    </div>
  );
};

export default UserPersonalDataBlock;
