import React from 'react';
import styles from './userDeliveryAddressForm.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../store/userSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../utils/validationSchema';
import UserDeliveryAddressList from '../userDeliveryAddressList/userDeliveryAddressList';
import {nanoid} from 'nanoid/non-secure';
import UserDeliveryMethodsList from '../../../components/userDeliveryMethodsList/userDeliveryMethodsList';

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
    },
    validationSchema: validationSchemaAddressForm,
    onSubmit: () => {
      const newAddress = {...formik.values, _id: nanoid(12)};
      const newUser = {
        ...user,
        deliveryAddress: [...user.deliveryAddress, newAddress],
        currentDeliveryAddress: newAddress._id,
      };
      dispatch(updateUser(newUser));
    },
  });
  return (
    <div className={styles.userDeliveryAddressForm} data-testid="UserDeliveryAddressForm">
      <p
        className={styles.deliveryTitle}
      >
        delivery
      </p>
      <div className={styles.deliveryBlock}>
        <div
          style={{width: '41rem'}}
          className={styles.deliveryBlockColumn}>
          <p className={styles.blockLabel}>
            Add new delivery method
          </p>
          <div className={styles.radioBlock}>
            <UserDeliveryMethodsList formik={formik}/>
            <button
              type='submit'
              onClick={formik.handleSubmit}
              disabled={!formik.dirty}
              className={styles.button}
            >
              <span>
                  add address
              </span>
            </button>
          </div>
        </div>
        <div className={styles.deliveryBlockColumn}>
          <p className={styles.blockLabel}>
            Saved delivery method
          </p>
          <UserDeliveryAddressList/>
        </div>
      </div>
    </div>
  );
};
export default UserDeliveryAddressForm;
