import React from 'react';
import styles from './deliveryOptionsSection.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../../store/userSlice';
import {getDeliveryOption, setDeliveryOption} from '../../../../store/ordersSlice';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import UserDeliveryAddressList
  from '../../../userPage/sideNavigation/userPersonalDataBlock/userDeliveryBlock/userDeliveryAddressList/userDeliveryAddressList';
import UserDeliveryMethodsList from './userDeliveryMethodsList/userDeliveryMethodsList';
const deliveryOptionsSection = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userCurrentDeliveryOption = useSelector(getDeliveryOption());
  const dispatch = useDispatch();

  const deliveryOptionsList = [
    {
      id: '1',
      label: 'new address',
      value: <UserDeliveryMethodsList/>,
    },
    {
      id: '2',
      label: 'saved address',
      value: <UserDeliveryAddressList hiddenButton={true}/>,
    },
  ];
  return (
    <div className={styles.deliveryOptionsSection} data-testid="deliveryOptionsSection">
      <div className={styles.radioBlock}>
        {deliveryOptionsList.map((method, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
              disabled={!isLoggedIn || user.deliveryAddress.length === 0}
              onClick = {()=> dispatch(setDeliveryOption(method.id))}
            >
              {userCurrentDeliveryOption === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>)}
      </div>
      {deliveryOptionsList.map((method)=>userCurrentDeliveryOption === method.id ? <div key={method.id}>{method.value}</div> : null)}
    </div>
  );
};
export default deliveryOptionsSection;
