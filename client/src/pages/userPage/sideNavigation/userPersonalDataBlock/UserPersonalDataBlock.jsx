import React from 'react';
import styles from './UserPersonalDataBlock.module.scss';
import UserDataForm from './UserPersonalDataForm/UserDataForm';
import UserDeliveryBlock from './userDeliveryBlock/UserDeliveryBlock';

const UserPersonalDataBlock = () => {
  return (
    <div className={styles.userPersonalDataBlock} data-testid="UserPersonalDataBlock">
      <UserDataForm/>
      <UserDeliveryBlock/>
    </div>
  );
};

export default UserPersonalDataBlock;
