import React, {useEffect, useState} from 'react';
import styles from './UserDeliveryBlock.module.scss';
import UserDeliveryAddressList from './UserDeliveryAddressList/UserDeliveryAddressList';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {nanoid} from 'nanoid/non-secure';
import {getUser, updateUserData} from '../../../../store/userSlice';
import {
  validationSchemaNPDeliveryAddress,
  validationSchemaNPDeliveryInternational,
  validationSchemaNPDeliveryWarehouse,
} from '../../../../utils/validationSchema';
import {getDeliveryMethod, setDeliveryMethod} from '../../../../store/ordersSlice';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';
import createDeliveryLabel from '../../../../utils/createDeliveryLabel';
import useDeliveryData from '../../../../utils/useDeliveryData';
import UserDeliveryMethodsList
  from '../../../../pages/checkOutPage/checkOutPageDelivery/deliveryOptionsSection/userDeliveryMethodsList/UserDeliveryMethodsList';
const UserDeliveryBlock = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const userCurrentDeliveryMethod = useSelector(getDeliveryMethod);
  const [selectedCity, setSelectedCity] = useState();
  const [warehousesList, setWarehousesList] = useState([]);
  const initialValues= {
    city: {},
    warehouse: {},
    street: '',
    houseNumber: '',
    flatNumber: '',
    intDeliveryAddress: '',
  };
  const validationSchema = (deliveryMethod) => {
    switch (deliveryMethod) {
      case 'Nova post delivery to the post office':
        return validationSchemaNPDeliveryWarehouse;
      case 'Nova post delivery to the address':
        return validationSchemaNPDeliveryAddress;
      case 'International delivery':
        return validationSchemaNPDeliveryInternational;
      default:
        return validationSchemaNPDeliveryWarehouse;
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema(userCurrentDeliveryMethod),
    onSubmit: (values) => {
      const newValues = {};
      Object.keys(values).forEach((key)=> {
        if (Object.keys(values[key]).length !==0) {
          newValues[key] = values[key];
        }
      });
      newValues.deliveryMethod = userCurrentDeliveryMethod;
      newValues.deliveryPrice = deliveryMethodsList[2][userCurrentDeliveryMethod].price;
      newValues._id = nanoid(12);
      newValues.label = createDeliveryLabel(newValues);
      dispatch(updateUserData({...user, deliveryAddress: [...user.deliveryAddress, newValues], currentDeliveryAddress: newValues._id}));
      formik.resetForm({
        values: {
          city: {},
          warehouse: {},
          street: '',
          houseNumber: '',
          flatNumber: '',
        },
      });
      dispatch(setDeliveryMethod('Nova post delivery to the post office'));
    },
  });
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  const selectedValue = (id) => {
    dispatch(setDeliveryMethod(deliveryMethodsList[1][id].label));
  };
  useDeliveryData(selectedCity, userCurrentDeliveryMethod, formik, setWarehousesList);
  useEffect(()=>{
    dispatch(setDeliveryMethod('Nova post delivery to the post office'));
  }, []);
  return user && (
    <div className={styles.userDeliveryBlock} data-testid="UserDeliveryBlock">
      <p
        className={styles.userDeliveryBlock__deliveryTitle}
      >
        delivery
      </p>
      <section className={styles.userDeliveryBlock__section}>
        <form
          className={styles.userDeliveryBlock__column}
          onSubmit={formik.handleSubmit}
        >
          <p className={styles.userDeliveryBlock__blockLabel}>
              Add new delivery method
          </p>
          <UserDeliveryMethodsList
            formik={formik}
            warehouseList={warehousesList}
            selectedValue={selectedValue}
            handleCityChange={handleCityChange}
            handleWarehouseChange={handleWarehouseChange}
          />
          <button
            className={styles.userDeliveryBlock__button}
            type='submit'
            disabled={!formik.isValid }
          >
            <span>
              add address
            </span>
          </button>
        </form>
        <div className={styles.userDeliveryBlock__column}>
          <p className={styles.userDeliveryBlock__blockLabel}>
            Saved delivery method
          </p>
          <UserDeliveryAddressList hiddenButton={false}/>
        </div>
      </section>
    </div>
  );
};

export default UserDeliveryBlock;
