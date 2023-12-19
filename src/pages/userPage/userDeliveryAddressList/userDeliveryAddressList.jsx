import React from 'react';
import styles from './userDeliveryAddressList.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../store/userSlice';
import ListWithRadioButtons from '../../../components/listWithRadioButtons/listWithRadioButtons';

const UserDeliveryAddressList = () => {
  const user = useSelector(getUser());
  return ( user.deliveryAddress &&
    <div className={styles.userDeliveryAddressList} data-testid="UserDeliveryAddressList"
    >
      <ListWithRadioButtons options={user.deliveryAddress} isList={true}/>
    </div>
  );
};

export default UserDeliveryAddressList;
