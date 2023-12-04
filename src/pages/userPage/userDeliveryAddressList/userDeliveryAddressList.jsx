import React, {useState} from 'react';
import styles from './userDeliveryAddressList.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../store/userSlice';
import RadioButtonEmptyIcon from '../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import RadioButtonCheckedIcon from '../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';

const UserDeliveryAddressList = () => {
  const user = useSelector(getUser());
  const dispatch = useDispatch();
  const [currentDeliveryAddress, setCurrentDeliveryAddress] = useState(user.currentDeliveryAddress);
  const deliveryAddressList = user.deliveryAddress.map((item)=>(
    {
      id: item._id,
      address: `${item.city.label}, ${
        (item.warehouse)?item.warehouse.label:''
      } ${item.street?item.street:''} ${
        item.houseNumber?item.houseNumber:''} ${
        item.flatNumber?`, apt. ${item.flatNumber}`:''} ${
        user.phoneNumber?`, +${user.phoneNumber}`:''
      }`,
    }
  ) );
  const selectDeliveryAddress = (id) => {
    setCurrentDeliveryAddress(id);
    dispatch(updateUser({...user, currentDeliveryAddress: id}));
  };
  return ( user.deliveryAddress &&
    <div
      className={styles.userDeliveryAddressList}
      data-testid="UserDeliveryAddressList"
    >
      {deliveryAddressList && deliveryAddressList.map((address)=>
        <div
          className={styles.radioWrapper}
          key={address.id}
        >
          <button
            className={styles.radioButton}
            onClick = {()=> selectDeliveryAddress(address.id)}
          >
            {currentDeliveryAddress === address.id? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
          </button>
          <label
            className={styles.label}
          >
            <input
              checked={currentDeliveryAddress === address.id}
              className={styles.input}
              type='radio'
              value={address.address}
              onChange={()=> selectDeliveryAddress(address.id)}
              name='address'
            />
            <div className={styles.labelText}>{address.address}</div>
          </label>
        </div>)}
    </div>
  );
};

export default UserDeliveryAddressList;
