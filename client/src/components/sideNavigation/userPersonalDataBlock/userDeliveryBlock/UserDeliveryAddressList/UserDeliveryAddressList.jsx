import React from 'react';
import styles from './UserDeliveryAddressList.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../../../../store/userSlice';
import ListWithRadioButtons from '../../../../ListWithRadioButtons/ListWithRadioButtons';

const UserDeliveryAddressList = ({ hiddenButton }) => {
  const user = useSelector(getUser);
  return user && user.deliveryAddress[0] ? (
    <div className={styles.userDeliveryAddressList} data-testid="UserDeliveryAddressList">
      <ListWithRadioButtons
        options={{ ...user.deliveryAddress }}
        isList={true}
        deleteButton={hiddenButton}
      />
    </div>
  ) : (
    <p className={styles.text}>You don&apos;t have any saved delivery address</p>
  );
};
UserDeliveryAddressList.propTypes = {
  hiddenButton: PropTypes.bool,
};
export default UserDeliveryAddressList;
