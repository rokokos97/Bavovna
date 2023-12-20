import React from 'react';
import styles from './userDeliveryAddressForm.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../../../../store/userSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../../../../utils/validationSchema';
import {nanoid} from 'nanoid/non-secure';
import UserDeliveryMethodsList from '../../../../../checkOutPage/blocks/checkOutUserInfoBlock/userDeliveryMethodsList/userDeliveryMethodsList';

const UserDeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik= useFormik({
    initialValues: {
      city: {},
      warehouse: {},
      street: '',
      houseNumber: '',
      flatNumber: '',
      intDeliveryAddress: '',
      deliveryMethod: '',
    },
    validationSchema: validationSchemaAddressForm,
    onSubmit: () => {
      const newAddress = {...formik.values, _id: nanoid(12)};
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: {...newAddress},
      };
      dispatch(updateUser(newUser));
    },
  });
  return (
    <div className={styles.userDeliveryAddressForm} data-testid="UserDeliveryAddressForm">
      <p className={styles.blockLabel}>
            Add new delivery method
      </p>
      <UserDeliveryMethodsList/>
    </div>
  );
};
export default UserDeliveryAddressForm;
