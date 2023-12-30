import React from 'react';
import styles from './userPersonalDataBlock.module.scss';
import UserDataForm from './userPersonalDataForm/userDataForm';
import UserDeliveryBlock from './userDeliveryBlock/userDeliveryBlock';

const UserPersonalDataBlock = () => {
  return (
    <div className={styles.userPersonalDataBlock} data-testid="UserPersonalDataBlock">
      <UserDataForm/>
      <UserDeliveryBlock/>
    </div>
  );
};

export default UserPersonalDataBlock;
