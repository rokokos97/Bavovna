import React, {useEffect, useState} from 'react';
import styles from './userDeliveryAddressForm.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getUser, updateUser} from '../../../store/userSlice';
import {useFormik} from 'formik';
import {validationSchemaAddressForm} from '../../../utils/validationSchema';
import npService from '../../../services/np.service';
import UserDeliveryAddressList from '../userDeliveryAddressList/userDeliveryAddressList';
import {nanoid} from 'nanoid/non-secure';
import {getCitiesList} from '../../../store/citiesSlice';
import RadioButtonEmptyIcon from '../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import RadioButtonCheckedIcon from '../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import NovaPoshtaWarehouseForm
  from '../../../components/form/formBlocks/novaPoshtaWarehouseForm/novaPoshtaWarehouseForm';
import NovaPoshtaAddressDeliveryForm
  from '../../../components/form/formBlocks/novaPoshtaAddressDeliveryForm/novaPoshtaAddressDeliveryForm';
import NovaInternationalAddressDeliveryForm
  from '../../../components/novaInternationalAddressDeliveryForm/novaInternationalAddressDeliveryForm';

const UserDeliveryAddressForm = () => {
  const [currentDeliveryMethod, setCurrentDeliveryMethod] = useState('1');
  const dispatch = useDispatch();
  const citiesList = useSelector(getCitiesList());
  const [warehousesList, setWarehousesList] = useState([]);
  const user = useSelector(getUser());
  const [selectedCity, setSelectedCity] = useState(null);

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
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  const deliveryMethodsList = [
    {
      id: '1', label: 'Nova poshta delivery to the post office', value: <NovaPoshtaWarehouseForm
        handleSubmit={formik.handleSubmit}
        handleCityChange={handleCityChange}
        citiesList={citiesList}
        handleWarehouseChange={handleWarehouseChange}
        warehousesList={warehousesList}
        formik={formik}
      />,
    }, {
      id: '2', label: 'Nova poshta delivery to the address', value: <NovaPoshtaAddressDeliveryForm
        formik={formik}
        handleCityChange={handleCityChange}
        citiesList={citiesList}
      />,
    }, {
      id: '3', label: 'International delivery', value: <NovaInternationalAddressDeliveryForm
        formik={formik}
      />,
    },
  ];
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
            {/* eslint-disable-next-line react/jsx-key */}
            {deliveryMethodsList.map((method)=> (
              <div
                style={{display: 'block'}}
                key={method.id}>
                <div className={styles.radioWrapper}>
                  <button
                    className={styles.radioButton}
                    onClick = {()=> setCurrentDeliveryMethod(method.id)}
                  >
                    {currentDeliveryMethod === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
                  </button>
                  <label
                    className={styles.label}
                  >
                    {method.label}
                  </label>
                </div>
                {currentDeliveryMethod === method.id ? method.value: null}
              </div>))}
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
