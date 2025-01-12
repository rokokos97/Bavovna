import React, { useState } from 'react';
import styles from './DeliveryOptionsSection.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../../../store/userSlice';
import {
  getDeliveryMethod,
  getDeliveryOption,
  setDeliveryMethod,
  setDeliveryOption,
  setDeliveryPrice,
  setUserDeliveryInfo,
} from '../../../../store/ordersSlice';
import UserDeliveryMethodsList from './userDeliveryMethodsList/UserDeliveryMethodsList';
import { useFormik } from 'formik';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';
import {
  validationSchemaNPDeliveryAddress,
  validationSchemaNPDeliveryInternational,
  validationSchemaNPDeliveryWarehouse,
} from '../../../../utils/validationSchema';
import { useNavigate } from 'react-router-dom';
import createDeliveryLabel from '../../../../utils/createDeliveryLabel';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';
import LeftArrowIcon from '../../../../components/svg/arrowIcons/LeftArrowIcon/LeftArrowIcon';
import { getCartTotalPrice } from '../../../../store/cartSlice';
import useDeliveryData from '../../../../utils/useDeliveryData';
import UserDeliveryAddressList from '../../../../components/sideNavigation/userPersonalDataBlock/userDeliveryBlock/UserDeliveryAddressList/UserDeliveryAddressList';
const deliveryOptionsSection = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const orderAmount = useSelector(getCartTotalPrice);
  const userCurrentDeliveryOption = useSelector(getDeliveryOption);
  const userCurrentDeliveryMethod = useSelector(getDeliveryMethod);
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState();
  const [warehousesList, setWarehousesList] = useState([]);
  const initialValues = {
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
    validationSchema:
      userCurrentDeliveryOption !== 'saved delivery method'
        ? validationSchema(userCurrentDeliveryMethod)
        : null,
    onSubmit: (values) => {
      if (userCurrentDeliveryOption === 'new delivery method') {
        const newValues = {};
        Object.keys(values).forEach((key) => {
          if (Object.keys(values[key]).length !== 0) {
            newValues[key] = values[key];
          }
        });
        newValues.label = createDeliveryLabel(newValues);
        newValues.deliveryMethod = userCurrentDeliveryMethod;
        newValues.deliveryPrice =
          orderAmount < 1000 ? deliveryMethodsList[2][userCurrentDeliveryMethod].price : 0;
        dispatch(setUserDeliveryInfo(newValues));
        navigate('/cart/checkoutPayment');
      } else {
        dispatch(
          setUserDeliveryInfo(
            user.deliveryAddress.find((address) => address._id === user.currentDeliveryAddress)
          )
        );
        navigate('/cart/checkoutPayment');
      }
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
    dispatch(setDeliveryPrice(deliveryMethodsList[1][id].price));
  };
  const setDeliveryOptionHandler = (method) => {
    dispatch(setDeliveryOption(method.label));
    formik.resetForm();
  };
  useDeliveryData(selectedCity, userCurrentDeliveryMethod, formik, setWarehousesList);
  const deliveryOptionsList = [
    {
      id: '1',
      label: 'new delivery method',
      value: (
        <UserDeliveryMethodsList
          type={'1'}
          formik={formik}
          warehouseList={warehousesList}
          selectedValue={selectedValue}
          handleCityChange={handleCityChange}
          handleWarehouseChange={handleWarehouseChange}
        />
      ),
    },
    {
      id: '2',
      label: 'saved delivery method',
      value: <UserDeliveryAddressList hiddenButton={true} />,
    },
  ];
  return (
    <div className={styles.deliveryOptionsSection} data-testid="deliveryOptionsSection">
      <p className={styles.deliveryOptionsSection__title}>Delivery</p>
      <div
        style={{ display: !isLoggedIn ? 'none' : 'flex' }}
        className={styles.deliveryOptionsSection__radioBlock}
      >
        {deliveryOptionsList.map((method) => (
          <section key={method.id} className={styles.deliveryOptionsSection__radioWrapper}>
            <input
              id={method.id}
              type="radio"
              name="customRadio"
              className={styles.deliveryOptionsSection__radioInput}
              onChange={() => {}}
            />
            <label
              className={styles.deliveryOptionsSection__label}
              onClick={() => setDeliveryOptionHandler(method)}
            >
              <div
                onClick={() => setDeliveryOptionHandler(method)}
                disabled={!isLoggedIn || user?.deliveryAddress.length === 0}
              >
                {userCurrentDeliveryOption === method.label ? (
                  <RadioButtonCheckedIcon />
                ) : (
                  <RadioButtonEmptyIcon />
                )}
              </div>
              {method.label}
            </label>
          </section>
        ))}
      </div>
      <form onSubmit={formik.handleSubmit}>
        {deliveryOptionsList.map((method) =>
          userCurrentDeliveryOption === method.label ? (
            <div key={method.id}>{method.value}</div>
          ) : null
        )}
      </form>
      <div className={styles.deliveryOptionsSection__navigationButtonsSection}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className={styles.deliveryOptionsSection__buttonLeft}
        >
          <LeftArrowIcon />
          <span>go back</span>
        </button>
        <button
          className={styles.deliveryOptionsSection__buttonRight}
          type="button"
          onClick={formik.submitForm}
          disabled={
            userCurrentDeliveryOption === 'new delivery method'
              ? !formik.isValid || !formik.dirty
              : !user.currentDeliveryAddress
          }
        >
          <span>next step</span>
          <LeftArrowIcon />
        </button>
      </div>
    </div>
  );
};
export default deliveryOptionsSection;
