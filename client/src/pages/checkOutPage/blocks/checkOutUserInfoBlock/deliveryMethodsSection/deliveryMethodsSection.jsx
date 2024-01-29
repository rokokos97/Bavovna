import React from 'react';
import styles from './deliveryMethodsSection.module.scss';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../../../store/userSlice';
import {getDeliveryOption, setDeliveryOption} from '../../../../../store/ordersSlice';
const DeliveryMethodsSection = ({deliveryMethods}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userCurrentDelivery = useSelector(getDeliveryOption());
  const dispatch = useDispatch();
  return (
    <div className={styles.deliveryMethodsSection} data-testid="DeliveryMethodsSection">
      <div className={styles.radioBlock}>
        {deliveryMethods.map((method, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
              disabled={!isLoggedIn}
              onClick = {()=> dispatch(setDeliveryOption(method.id))}
            >
              {userCurrentDelivery === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>)}
      </div>
      {deliveryMethods.map((method)=>userCurrentDelivery === method.id ? <div key={method.id}>{method.value}</div> : null)}
    </div>
  );
};
DeliveryMethodsSection.propTypes = {
  deliveryMethods: PropTypes.array.isRequired,
};
export default DeliveryMethodsSection;
