import React from 'react';
import styles from './userDeliveryAddressList.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../store/userSlice';

const UserDeliveryAddressList = () => {
  const user = useSelector(getUser());
  const deliveryAddressList = user.deliveryAddress.map((item, index)=>(
    {
      id: user.phoneNumber+index,
      address: `${item.city.label}, ${
        (item.warehouse)?item.warehouse.label:''
      } ${item.street?item.street:''} ${
        item.houseNumber?item.houseNumber:''} ${
        item.flatNumber?`, apt. ${item.flatNumber}`:''} ${
        user.phoneNumber?`, +${user.phoneNumber}`:''
      }`,
    }
  ) );
  console.log(deliveryAddressList);
  return ( user.deliveryAddress &&
    <form className={styles.userDeliveryAddressList} data-testid="UserDeliveryAddressList">
      {deliveryAddressList.map((address)=>
        <div
          className={styles.radioWrapper}
          key={address.id}>
          <input
            className={styles.input}
            type='radio'
            value={address.address}
            id={address.id}
            name='address'
          />
          <label
            className={styles.label}
            htmlFor={address.id}
          >
            {address.address}
          </label>
        </div>)}
    </form>
  );
};

export default UserDeliveryAddressList;
