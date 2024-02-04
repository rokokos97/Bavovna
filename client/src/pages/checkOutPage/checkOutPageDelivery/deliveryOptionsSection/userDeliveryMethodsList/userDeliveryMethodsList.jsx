import React from 'react';
import styles from './userDeliveryMethodsList.module.scss';
import ListWithRadioButtons from '../../../../../components/listWithRadioButtons/listWithRadioButtons';
import NpWarehouseDeliveryFormCheckout
  from './userDeliveryMethods/npWarehouseDeliveryFormCheckout/npWarehouseDeliveryFormCheckout';
import NpHomeDeliveryFormCheckout from './userDeliveryMethods/npHomeDeliveryFormCheckout/npHomeDeliveryFormCheckout';
import NpInternationalDeliveryFormCheckout
  from './userDeliveryMethods/npInternationalDeliveryFormCheckout/npInternationalDeliveryFormCheckout';
import PropTypes from 'prop-types';

const UserDeliveryMethodsList = ({handleCityChange, handleWarehouseChange, selectedValue, warehouseList, formik}) => {
  const deliveryMethods = {
    1: {
      _id: '1',
      label: 'Nova post delivery to the post office',
      value: <NpWarehouseDeliveryFormCheckout
        formik={formik}
        warehousesList={warehouseList}
        handleCityChange={handleCityChange}
        handleWarehouseChange={handleWarehouseChange}
      />,
      price: 2,
    },
    2: {
      _id: '2',
      label: 'Nova post delivery to the address',
      value: <NpHomeDeliveryFormCheckout
        formik={formik}
        handleCityChange={handleCityChange}/>,
      price: 3,
    },
    3: {
      _id: '3',
      label: 'International delivery',
      value: <NpInternationalDeliveryFormCheckout formik={formik}/>,
      price: 20,
    },
  };
  return (
    <div className={styles.userDeliveryMethodsList} data-testid="UserDeliveryMethodsList">
      <ListWithRadioButtons
        onSelectValue={selectedValue}
        options={deliveryMethods}
        isList={false}
        deleteButton={true}
        key={2}/>
    </div>
  );
};
UserDeliveryMethodsList.propTypes = {
  handleCityChange: PropTypes.func,
  handleWarehouseChange: PropTypes.func,
  selectedValue: PropTypes.func,
  warehouseList: PropTypes.array,
  formik: PropTypes.object,
};
export default UserDeliveryMethodsList;
