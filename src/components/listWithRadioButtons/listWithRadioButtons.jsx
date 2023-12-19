import React, {useState} from 'react';
import styles from './listWithRadioButtons.module.scss';
import PropTypes from 'prop-types';
import RadioButtonCheckedIcon from '../svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import DeleteIcon from '../svg/deleteIcon/deleteIcon';
import {getUser, updateUser} from '../../store/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const ListWithRadioButtons = ({options, isList}) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const [selectedValue, setSelectedValue] = useState(isList ? user.currentDeliveryAddress : '1');
  const handleChange = (id) => {
    setSelectedValue(id);
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
      {options.map((option) => (
        <div key={option._id} className={styles.radioOption}>
          <input
            id={option._id}
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selectedValue === option._id}
            onChange={()=>handleChange(option._id)}
            className={styles.radioInput}
          />
          <label htmlFor={option._id} className={styles.radioLabel}>
            {selectedValue === option._id ? <RadioButtonCheckedIcon /> : <RadioButtonEmptyIcon />}
            <div>{option.label}</div>
            {isList && <button
              onClick={() => deleteDeliveryAddress(option._id)}
              className={styles.deleteButton}
            >
              <DeleteIcon/>
            </button>}
          </label>
        </div>
      ))}
      {selectedValue && !isList && (
        <div>
          {options.find((option) => option._id === selectedValue).value}
        </div>
      )}
    </div>
  );
};
ListWithRadioButtons.propTypes = {
  options: PropTypes.array,
  isList: PropTypes.bool,
};
export default ListWithRadioButtons;


