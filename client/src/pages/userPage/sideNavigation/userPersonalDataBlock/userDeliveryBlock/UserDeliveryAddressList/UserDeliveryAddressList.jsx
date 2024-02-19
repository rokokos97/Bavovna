import React from 'react';
import styles from './UserDeliveryAddressList.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../../../../store/userSlice';
import ListWithRadioButtons from '../../../../../../components/ListWithRadioButtons/ListWithRadioButtons';
import PropTypes from 'prop-types';

const UserDeliveryAddressList = ({hiddenButton}) => {
  const user = useSelector(getUser);
  return ( user &&
    <div className={styles.userDeliveryAddressList} data-testid="UserDeliveryAddressList"
    >
      <ListWithRadioButtons options={{...user.deliveryAddress}} isList={true} deleteButton={hiddenButton}/>
    </div>
  );
};
UserDeliveryAddressList.propTypes = {
  hiddenButton: PropTypes.bool,
};
export default UserDeliveryAddressList;
