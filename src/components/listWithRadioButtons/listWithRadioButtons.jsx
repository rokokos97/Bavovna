import React, {useEffect, useState} from 'react';
import styles from './listWithRadioButtons.module.scss';
import PropTypes from 'prop-types';
import RadioButtonCheckedIcon from '../svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import DeleteIcon from '../svg/deleteIcon/deleteIcon';
import {getUser, updateUser} from '../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const ListWithRadioButtons = ({options, isList, hideButton}) => {
  console.log('options', options);
  const dispatch = useDispatch();
  const user = useSelector(getUser());

  //  user.deliveryAddress && console.log(user.deliveryAddress.filter((item) => item._id === user.currentDeliveryAddress)[0].deliveryMethod);
  const [selectedValue, setSelectedValue] = useState('Nova poshta delivery to the post office');
  const handleChange = (label) => {
    setSelectedValue(label);
    if (isList) {
      dispatch(updateUser({...user, currentDeliveryAddress: label}));
    }
  };
  const deleteDeliveryAddress = (id) => {
    const newDeliveryAddressList = user.deliveryAddress.filter((address)=>address._id !== id);
    dispatch(updateUser({...user, currentDeliveryAddress: '', deliveryAddress: newDeliveryAddressList}));
  };
  useEffect(()=> {
    if (!isList && user && user.deliveryAddress) {
      const currentDeliveryMethod = user.deliveryAddress.find((item) => item.label === user.currentDeliveryAddress);
      console.log('currentDeliveryMethod', currentDeliveryMethod);
      currentDeliveryMethod && setSelectedValue(currentDeliveryMethod.deliveryMethod);
    }
    if (isList && user.currentDeliveryAddress) {
      setSelectedValue(user.currentDeliveryAddress);
    }
  }, [user]);
  return (
    <div className={styles.listWithRadioButtons}>
      {options.map((option) => {
        console.log('selectedValue', selectedValue);
        return (
          <div key={option._id} className={styles.radioOption}>
            <input
              id={option._id}
              type="radio"
              name="customRadio"
              value={option.value}
              checked={selectedValue === option.label}
              onChange={() => handleChange(option.label)}
              className={styles.radioInput}
            />
            <label htmlFor={option._id} className={styles.radioLabel}>
              {selectedValue === option.label ? <RadioButtonCheckedIcon/> : <RadioButtonEmptyIcon/>}
              <div>{option.label}</div>
            </label>
            {isList && <div
              onClick={() => deleteDeliveryAddress(option._id)}
              style={hideButton ? {display: 'none'}: {}}
              role='button'
              className={styles.deleteButton}
            >
              <DeleteIcon/>
            </div>}
          </div>
        );
      })}
      {selectedValue && !isList && (
        <div>
          {options.find((option) => option.label === selectedValue).value}
        </div>
      )}
    </div>
  );
};
ListWithRadioButtons.propTypes = {
  options: PropTypes.array,
  isList: PropTypes.bool,
  hideButton: PropTypes.bool,
};
export default ListWithRadioButtons;


