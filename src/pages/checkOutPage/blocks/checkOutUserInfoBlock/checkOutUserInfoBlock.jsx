import React, {useEffect, useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';
import {useSelector, shallowEqual} from 'react-redux';
import {useFormik} from 'formik';
import AnonimUserContactFormBlock
  from '../../../../components/form/formBlocks/anonimUserContactFormBlock/anonimUserContactFormBlock';
import UserPaymentMethodsList from './userPaymentMethodsList/userPaymentMethodsList';
import {
  validationSchemaCheckOutNPAD, validationSchemaCheckOutNPID,
  validationSchemaCheckOutNPWDC,
} from '../../../../utils/validationSchema';
import UserDeliveryAddressList
  from '../../../userPage/sideNavigation/userPersonalDataBlock/userDeliveryBlock/userDeliveryAddressList/userDeliveryAddressList';
import ListWithRadioButtons from '../../../../components/listWithRadioButtons/listWithRadioButtons';
import PropTypes from 'prop-types';
import NpWarehouseDeliveryFormCheckout
  from './userDeliveryMethods/npWarehouseDeliveryFormCheckout/npWarehouseDeliveryFormCheckout';
import npService from '../../../../services/np.service';
import NpHomeDeliveryFormCheckout from './userDeliveryMethods/npHomeDeliveryFormCheckout/npHomeDeliveryFormCheckout';
import NpInternationalDeliveryFormCheckout
  from './userDeliveryMethods/npInternationalDeliveryFormCheckout/npInternationalDeliveryFormCheckout';
import {getNormalizedCart} from '../../../../store/cartSlice';

const CheckOutUserInfoBlock = ({selectedValue, selectedDeliveryMethod, promoCode}) => {
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn, shallowEqual);
  const user = useSelector((state) => state.user.entities, shallowEqual );
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const [userCurrentDelivery, setUserCurrentDelivery] = useState('1');
  const [warehousesList, setWarehousesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const cart = useSelector(getNormalizedCart);
  const getValidationSchema = (deliveryMethod) => {
    switch (deliveryMethod) {
      case '1': // Nova poshta delivery to the post office
        return validationSchemaCheckOutNPWDC;
      case '2': // Nova poshta delivery to the address
        return validationSchemaCheckOutNPAD;
      case '3': // Nova poshta international delivery;
        return validationSchemaCheckOutNPID;
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: {},
      warehouse: {},
      street: '',
      houseNumber: '',
      flatNumber: '',
      intDeliveryAddress: '',
      currentDeliveryAddress: '',
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cardHolderName: '',
    },
    validationSchema: getValidationSchema(selectedDeliveryMethod),
    onSubmit: (values)=> {
      const order = {
        items: cart,
        promoCode: promoCode,
        userData: {...values},
      };
      console.log('order', order);
    },
  });
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  const option = {
    1: {
      _id: '1',
      label: 'Nova poshta delivery to the post office',
      value: <NpWarehouseDeliveryFormCheckout
        formik={formik}
        warehousesList={warehousesList}
        handleCityChange={handleCityChange}
        handleWarehouseChange={handleWarehouseChange}
      />,
      price: 2,
    },
    2: {
      _id: '2',
      label: 'Nova poshta delivery to the address',
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
  const userCurrentDetailsList = [
    {
      id: '1',
      label: 'new user',
      value: <AnonimUserContactFormBlock formik={formik} key={1}/>,
    },
    {
      id: '2',
      label: 'registered user',
      value: <LoginFormBlock key={2}/>,
    },
  ];
  const deliveryMethods = [
    {
      id: '1',
      label: 'new address',
      value: <ListWithRadioButtons
        onSelectValue={selectedValue}
        options={option}
        isList={false}
        deleteButton={true}
        key={2}/>,
    },
    {
      id: '2',
      label: 'saved address',
      value: <UserDeliveryAddressList formik={formik} hiddenButton={true} key={1}/>,
    },
  ];
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  useEffect(()=>{
    formik.setFieldValue('city', {});
    formik.setFieldValue('warehouse', {});
    formik.setFieldValue('street', '');
    formik.setFieldValue('houseNumber', '');
    formik.setFieldValue('flatNumber', '');
    formik.setFieldValue('intDeliveryAddress', '');
  }, [selectedValue]);
  useEffect(()=> {
    if (user) {
      formik.setFieldValue('firstName', user.firstName);
      formik.setFieldValue('lastName', user.lastName);
      formik.setFieldValue('email', user.email);
      formik.setFieldValue('phoneNumber', user.phoneNumber);
      formik.setFieldValue('currentDeliveryAddress', user.currentDeliveryAddress);
    }
  }, [user]);
  return (
    <form onSubmit={formik.handleSubmit} className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
      <p className={styles.title} id='contacts'>Contact details</p>
      <div className={styles.radioBlock}>
        {userCurrentDetailsList.map((detail, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              disabled={isLoggedIn}
              onClick = {()=> setUserCurrentDetails(detail.id) }
            >
              {userCurrentDetails === detail.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {detail.label}
            </label>
          </div>
        </div>)}
      </div>
      {userCurrentDetailsList.map((detail)=>
            userCurrentDetails === detail.id ? <div key={detail.id}>{detail.value}</div> : null)}
      <div className={styles.divider}/>
      <p className={styles.title} id='delivery'>delivery</p>
      <div className={styles.radioBlock}>
        {deliveryMethods.map((detail, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
              disabled={!isLoggedIn}
              onClick = {()=> setUserCurrentDelivery(detail.id) }
            >
              {userCurrentDelivery === detail.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {detail.label}
            </label>
          </div>
        </div>)}
      </div>
      {deliveryMethods.map((detail)=>
        userCurrentDelivery === detail.id ? <div key={detail.id}>{detail.value}</div> : null)}
      <div className={styles.divider}/>
      <p className={styles.title} id='payment'>payment method</p>
      <UserPaymentMethodsList formik={formik}/>
      <button
        type='submit'
        disabled={!formik.dirty || !formik.isValid}
        className={styles.button}
      >
        <span>
                  place the order
        </span>
      </button>
    </form>
  );
};
CheckOutUserInfoBlock.propTypes = {
  selectedValue: PropTypes.func,
  selectedDeliveryMethod: PropTypes.string,
  promoCode: PropTypes.string,
};
export default CheckOutUserInfoBlock;
