import React, {useEffect, useState} from 'react';
import styles from './userDeliveryMethodsList.module.scss';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import NovaPoshtaWarehouseForm
  from '../../../../../components/form/formBlocks/novaPoshtaWarehouseForm/novaPoshtaWarehouseForm';
import NovaPoshtaAddressDeliveryForm
  from '../../../../../components/form/formBlocks/novaPoshtaAddressDeliveryForm/novaPoshtaAddressDeliveryForm';
import NovaInternationalAddressDeliveryForm
  from '../../../../../components/form/formBlocks/novaInternationalAddressDeliveryForm/novaInternationalAddressDeliveryForm';
import npService from '../../../../../services/np.service';
import {useSelector} from 'react-redux';
import {getCitiesList} from '../../../../../store/citiesSlice';
import PropTypes from 'prop-types';
const UserDeliveryMethodsList = ({formik}) => {
  const [currentDeliveryMethod, setCurrentDeliveryMethod] = useState('1');
  const citiesList = useSelector(getCitiesList());
  const [warehousesList, setWarehousesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
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
    <div className={styles.userDeliveryMethodsList} data-testid="UserDeliveryMethodsList">
      {deliveryMethodsList.map((method, index)=> (
        <div
          style={{display: 'block'}}
          key={index}>
          <div className={styles.radioWrapper}>
            <div
              className={styles.radioButton}
              onClick = {()=> setCurrentDeliveryMethod(method.id)}
            >
              {currentDeliveryMethod === method.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </div>
            <label
              className={styles.label}
            >
              {method.label}
            </label>
          </div>
        </div>))}
      <p className={styles.title}>delivery to the address</p>
      {deliveryMethodsList.map((method)=> currentDeliveryMethod === method.id ? <div key={method.id}>{method.value}</div>: null)}
    </div>
  );
};
UserDeliveryMethodsList.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default UserDeliveryMethodsList;
