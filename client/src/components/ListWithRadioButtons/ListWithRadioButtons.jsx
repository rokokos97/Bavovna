import React, {useState} from 'react';
import styles from './ListWithRadioButtons.module.scss';
import PropTypes from 'prop-types';
import DeleteIcon from '../svg/DeleteIcon/DeleteIcon';
import {getUser, updateUser} from '../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import RadioButtonCheckedIcon from '../svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';

const ListWithRadioButtons = ({options, isList, deleteButton, onSelectValue}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [currentValue, setCurrentValue] = useState(!isList? '1' : user.currentDeliveryAddress);
  const handleChange = (id) => {
    setCurrentValue(id);
    if (onSelectValue) {
      onSelectValue(id);
    }
    if (isList) {
      dispatch(updateUser({...user, currentDeliveryAddress: id}));
    }
  };
  const deleteDeliveryAddress = (id) => {
    const newDeliveryAddressList = user.deliveryAddress.filter((address)=>address._id !== id);
    dispatch(updateUser({...user, currentDeliveryAddress: '', deliveryAddress: newDeliveryAddressList}));
  };
  return (
    <div className={styles.listWithRadioButtons}>
      {Object.values(options).map((option) => {
        return (
          <div key={option._id} className={styles.radioOption}>
            <input
              id={option._id}
              type="radio"
              name="customRadio"
              value={option.value}
              checked={currentValue === option._id}
              onChange={() => handleChange(option._id)}
              className={styles.radioInput}
            />
            <label htmlFor={option._id} className={styles.radioLabel}>
              {currentValue === option._id ? <RadioButtonCheckedIcon/> : <RadioButtonEmptyIcon/>}
              <div>{option.label}</div>
            </label>
            {isList && <div
              onClick={() => deleteDeliveryAddress(option._id)}
              style={deleteButton ? {display: 'none'}: {}}
              role='button'
              className={styles.deleteButton}
            >
              <DeleteIcon/>
            </div>}
          </div>
        );
      })}
      {currentValue && !isList &&(
        <div>
          {Object.values(options).find((option) => option._id === currentValue).value}
        </div>
      )}
    </div>
  );
};
ListWithRadioButtons.propTypes = {
  options: PropTypes.object,
  isList: PropTypes.bool,
  deleteButton: PropTypes.bool,
  onSelectValue: PropTypes.func,
};
export default ListWithRadioButtons;


