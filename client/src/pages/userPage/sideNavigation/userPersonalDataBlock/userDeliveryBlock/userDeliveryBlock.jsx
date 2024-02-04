import React, {useEffect, useState} from 'react';
import styles from './userDeliveryBlock.module.scss';
import UserDeliveryAddressList from './userDeliveryAddressList/userDeliveryAddressList';
// import ListWithRadioButtons from '../../../../../components/listWithRadioButtons/listWithRadioButtons';
// import deliveryMethodsList from '../../../../../utils/deliveryMethodsList';
import UserDeliveryMethodsList
  from '../../../../checkOutPage/checkOutPageDelivery/deliveryOptionsSection/userDeliveryMethodsList/userDeliveryMethodsList';
import {useDispatch, useSelector} from 'react-redux';
import {
  validationSchemaNPDeliveryAddress, validationSchemaNPDeliveryInternational,
  validationSchemaNPDeliveryWarehouse,
} from '../../../../../utils/validationSchema';
import {useFormik} from 'formik';
import {getDeliveryMethod, setDeliveryMethod} from '../../../../../store/ordersSlice';
import deliveryMethodsList from '../../../../../utils/deliveryMethodsList';
import npService from '../../../../../services/np.service';
import {nanoid} from 'nanoid/non-secure';
import {getUser, updateUser} from '../../../../../store/userSlice';
const UserDeliveryBlock = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const userCurrentDeliveryMethod = useSelector(getDeliveryMethod());
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
  const createDeliveryLabel = (object) => {
    let label = '';
    Object.keys(object).forEach((key)=> {
      if (key === 'city') {
        label +=`${object[key].label}`;
      }
      if (key === 'warehouse') {
        label +=`, ${object[key].label}`;
      }
      if (key === 'street') {
        label +=`, str.${object[key]}`;
      }
      if (key === 'houseNumber') {
        label +=` ${object[key]}`;
      }
      if (key === 'flatNumber') {
        label +=`, apt.${object[key]}`;
      }
      if (key === 'intDeliveryAddress') {
        label +=`${object[key]}`;
      }
    });
    return label;
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
      dispatch(updateUser({...user, deliveryAddress: [...user.deliveryAddress, newValues], currentDeliveryAddress: newValues._id}));
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
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity?.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  useEffect(()=>{
    formik.resetForm({
      values: {
        city: {},
        warehouse: {},
        street: '',
        houseNumber: '',
        flatNumber: '',
      },
    });
  }, [userCurrentDeliveryMethod, formik.resetForm]);
  useEffect(()=>{
    dispatch(setDeliveryMethod('Nova post delivery to the post office'));
  }, []);
  return (
    <div className={styles.userDeliveryBlock} data-testid="UserDeliveryBlock">
      <p
        className={styles.deliveryTitle}
      >
        delivery
      </p>
      <section className={styles.section}>
        <form
          className={styles.column}
          onSubmit={formik.handleSubmit}
        >
          <p className={styles.blockLabel}>
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
            className={styles.button}
            type='submit'
          >
            <span>
              add address
            </span>
          </button>
        </form>
        <div className={styles.column}>
          <p className={styles.blockLabel}>
            Saved delivery method
          </p>
          <UserDeliveryAddressList hiddenButton={false}/>
        </div>
      </section>
    </div>
  );
};

export default UserDeliveryBlock;
