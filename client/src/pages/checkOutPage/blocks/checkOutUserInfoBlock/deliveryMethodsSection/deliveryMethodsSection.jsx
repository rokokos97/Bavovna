import React from 'react';
import styles from './deliveryMethodsSection.module.scss';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../../../store/userSlice';
const DeliveryMethodsSection = ({deliveryMethods, setUserCurrentDelivery, userCurrentDelivery}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
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
              onClick = {()=> setUserCurrentDelivery(method.id) }
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
  setUserCurrentDelivery: PropTypes.func.isRequired,
  userCurrentDelivery: PropTypes.string.isRequired,
};
export default DeliveryMethodsSection;
