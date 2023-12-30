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
import {validationSchemaCheckOutUserData} from '../../../../utils/validationSchema';
import UserDeliveryAddressList
  from '../../../userPage/sideNavigation/userPersonalDataBlock/userDeliveryBlock/userDeliveryAddressList/userDeliveryAddressList';
import deliveryMethodsList from '../../../../utils/deliveryMethodsList';
import ListWithRadioButtons from '../../../../components/listWithRadioButtons/listWithRadioButtons';
import PropTypes from 'prop-types';

const CheckOutUserInfoBlock = ({selectedValue}) => {
  const isLoggedIn = useSelector((state)=> state.user.isLoggedIn, shallowEqual);
  const user = useSelector((state) => state.user.entities, shallowEqual );
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const [userCurrentDelivery, setUserCurrentDelivery] = useState('1');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: {},
      warehouse: {},
      currentDeliveryAddress: '',
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cardHolderName: '',
    },
    validationSchema: validationSchemaCheckOutUserData,
    onSubmit: (values)=> {
      console.log('OrderDetails', values);
    },
  });
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
        options={deliveryMethodsList[2]}
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
};
export default CheckOutUserInfoBlock;
