import React, {useEffect, useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import UnknownUserContactFormBlock
  from '../../../../components/form/formBlocks/anonimUserContactFormBlock/unknownUserContactFormBlock';
import PaymentMethodSection from './paymentMethodSection/paymentMethodSection';
import {
  validationSchemaCheckOutCardPayment,
  validationSchemaCheckOutNPAD, validationSchemaCheckOutNPID,
  validationSchemaCheckOutNPWDC, validationSchemaCheckOutReceiptPayment,
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
import {clearCart, getNormalizedCart} from '../../../../store/cartSlice';
import DeliveryMethodsSection from './deliveryMethodsSection/deliveryMethodsSection';
import UserDetailsSection from './userDetailsSection/userDetailsSection';
import {getUser, updateUser} from '../../../../store/userSlice';
import {customAlphabet} from 'nanoid/non-secure';
import {useNavigate} from 'react-router-dom';
import {
  addOrder,
  getDeliveryOption, getOrderAmount, getPaymentMethod,
  setDeliveryMethod,
  setShippingPrice as setDeliveryPriceInStore,
} from '../../../../store/ordersSlice';
import {clearCartSessionStorage} from '../../../../services/sessionStorage.service';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';

const CheckOutUserInfoBlock = () => {
  const user = useSelector(getUser);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const [warehousesList, setWarehousesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const paymentMethod = useSelector(getPaymentMethod());
  const [shippingPrice, setShippingPrice] = useState(2);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('1');
  const userCurrentDeliveryOption = useSelector(getDeliveryOption());
  const orderAmount = useSelector(getOrderAmount());
  const cart = useSelector(getNormalizedCart);
  const numbers = '0123456789';
  const generateNumericId = customAlphabet(numbers, 15);
  const getValidationSchema = () => {
    if (paymentMethod === '2' && userCurrentDeliveryOption === '2') return validationSchemaCheckOutReceiptPayment;
    if (paymentMethod === '1' && userCurrentDeliveryOption === '2') return validationSchemaCheckOutCardPayment;
    //    if () return validationSchemaCheckOutCurrentDeliveryAddress;
    switch (selectedDeliveryMethod) {
      case '1': // Nova poshta delivery to the post office
        return validationSchemaCheckOutNPWDC;
      case '2': // Nova poshta delivery to the address
        return validationSchemaCheckOutNPAD;
      case '3': // Nova poshta international delivery;
        return validationSchemaCheckOutNPID;
    }
  };
  const selectedValue = (id) => {
    setSelectedDeliveryMethod(id);
    setShippingPrice(deliveryMethodsList[1][id].price);
  };
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Місяці від 0 до 11
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
  const handleCityChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue('city', value);
  };
  const handleWarehouseChange = (value) => {
    formik.setFieldValue('warehouse', value);
  };
  console.log(userCurrentDeliveryOption);
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
      flatNumber: null,
      intDeliveryAddress: '',
      currentDeliveryAddress: '',
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cardHolderName: '',
    },
    validationSchema: getValidationSchema(),
    onSubmit: async (values)=> {
      const deliveryAddress = () => {
        switch (selectedDeliveryMethod) {
          case '1':
            return `${values.city.label}, ${values.warehouse.label}`;
          case '2':
            return `${values.city.label}, ${values.street} ${values.houseNumber}${values.flatNumber?
            ', '+values.flatNumber: null}`;
          case '3':
            return `${values.intDeliveryAddress}`;
        }
      };
      const newOrder = {
        deliveryOption: deliveryOptions[userCurrentDeliveryOption-1].label,
        // eslint-disable-next-line max-len
        deliveryMethods: userCurrentDeliveryOption!=='2' ?
          deliveryMethods[selectedDeliveryMethod].label :
          user.deliveryAddress.find((address) => address._id === user.currentDeliveryAddress).deliveryMethod,
        // eslint-disable-next-line max-len
        deliveryAddress: userCurrentDeliveryOption!=='2' ?
          deliveryAddress():
          user.deliveryAddress.find((address) => address._id === user.currentDeliveryAddress).label,
        items: cart,
        userData: {...values},
        shippingPrice: shippingPrice,
        orderAmount: orderAmount,
        _id: generateNumericId(),
        date: formatDate(new Date()),
        paymentStatus: paymentMethod==='1'? 'paid': 'pending payment',
        deliveryStatus: 'pending',
      };
      if (user) {
        const newUser = await {
          ...user,
          orders: [...user.orders, newOrder],
        };

        await dispatch(updateUser(newUser));
      }
      dispatch(addOrder(newOrder));
      await dispatch(clearCart());
      clearCartSessionStorage();
      navigation('/orderSuccess');
    },
  });
  const deliveryMethods = {
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
      value: <UnknownUserContactFormBlock formik={formik} key={1}/>,
    },
    {
      id: '2',
      label: 'registered user',
      value: <LoginFormBlock key={2}/>,
    },
  ];
  const deliveryOptions = [
    {
      id: '1',
      label: 'new address',
      value: <ListWithRadioButtons
        onSelectValue={selectedValue}
        options={deliveryMethods}
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
  useEffect(()=> {
    dispatch(setDeliveryPriceInStore(shippingPrice));
    dispatch(setDeliveryMethod(selectedDeliveryMethod));
  }, [selectedValue]);
  useEffect(()=>{
    if (selectedCity) {
      npService.post({cityRef: selectedCity.value}).then(async (data)=> {
        setWarehousesList(await data);
      });
    }
  }, [selectedCity]);
  useEffect(()=> {
    if (user) {
      formik.setFieldValue('firstName', user.firstName);
      formik.setFieldValue('lastName', user.lastName);
      formik.setFieldValue('email', user.email);
      formik.setFieldValue('phoneNumber', user.phoneNumber);
    }
    if (userCurrentDeliveryOption === '2') {
      const currentDeliveryAddress = user && user.deliveryAddress.filter((item)=> item._id === user.currentDeliveryAddress);
      formik.setFieldValue('currentDeliveryAddress', user? currentDeliveryAddress[0] : '');
      currentDeliveryAddress && setShippingPrice(currentDeliveryAddress[0].price);
    }
  }, [user, userCurrentDeliveryOption]);
  return (
    <div className={styles.checkOutUserInfoBlock}>
      <p className={styles.title}>Contact details</p>
      <UserDetailsSection
        userCurrentDetailsList={userCurrentDetailsList}
        setUserCurrentDetails={setUserCurrentDetails}
        userCurrentDetails={userCurrentDetails}
      />
      <form onSubmit={formik.handleSubmit} className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
        {userCurrentDetails === '1' && userCurrentDetailsList[0].value}
        <div className={styles.divider}/>
        <p className={styles.title}>delivery</p>
        <DeliveryMethodsSection
          deliveryMethods={deliveryOptions}
        />
        <div className={styles.divider}/>
        <p className={styles.title}>payment method</p>
        <PaymentMethodSection formik={formik}/>
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
    </div>
  );
};
CheckOutUserInfoBlock.propTypes = {
  totalPrice: PropTypes.number,
  selectedValue: PropTypes.func,
  userCurrentDelivery: PropTypes.string,
  setUserCurrentDelivery: PropTypes.func,
  selectedDeliveryMethod: PropTypes.string,
};
export default CheckOutUserInfoBlock;
