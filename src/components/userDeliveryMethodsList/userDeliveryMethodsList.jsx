import React, {useEffect, useState} from 'react';
import styles from './userDeliveryMethodsList.module.scss';
import RadioButtonCheckedIcon from '../svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import NovaPoshtaWarehouseForm from '../form/formBlocks/novaPoshtaWarehouseForm/novaPoshtaWarehouseForm';
import NovaPoshtaAddressDeliveryForm
  from '../form/formBlocks/novaPoshtaAddressDeliveryForm/novaPoshtaAddressDeliveryForm';
import NovaInternationalAddressDeliveryForm
  from '../form/formBlocks/novaInternationalAddressDeliveryForm/novaInternationalAddressDeliveryForm';
import npService from '../../services/np.service';
import {useSelector} from 'react-redux';
import {getCitiesList} from '../../store/citiesSlice';
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
      {deliveryMethodsList.map((method)=> (
        <div
          style={{display: 'block'}}
          key={method.id}>
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
      {deliveryMethodsList.map((method)=> currentDeliveryMethod === method.id ? method.value: null)}
    </div>
  );
};
UserDeliveryMethodsList.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default UserDeliveryMethodsList;
