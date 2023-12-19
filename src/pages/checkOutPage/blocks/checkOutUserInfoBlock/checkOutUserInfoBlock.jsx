import React, {useEffect, useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';
import {useSelector} from 'react-redux';
import {getIsLoggedIn, getUser} from '../../../../store/userSlice';
import {useFormik} from 'formik';
import AnonimUserContactFormBlock
  from '../../../../components/form/formBlocks/anonimUserContactFormBlock/anonimUserContactFormBlock';
import UserDeliveryMethodsList from './userDeliveryMethodsList/userDeliveryMethodsList';
import UserPaymentMethodsList from './userPaymentMethodsList/userPaymentMethodsList';
import {validationSchemaCheckOutUserData} from '../../../../utils/validationSchema';

const CheckOutUserInfoBlock = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const user = useSelector(getUser());
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: [],
      currentDeliveryMethod: '',
      currentDeliveryAddress: '',
      cardNumber: '',
      validityDate: '',
      cvvCvc: '',
      cartHolderName: '',
    },
    ValidationSchema: validationSchemaCheckOutUserData,
    onSubmit: (values)=> {
      console.log(values);
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
  useEffect(()=> {
    if (user) {
      formik.setFieldValue('firstName', user.firstName);
      formik.setFieldValue('lastName', user.lastName);
      formik.setFieldValue('email', user.email);
      formik.setFieldValue('phoneNumber', user.phoneNumber);
    }
  }, [user]);
  console.log('formik.values', formik.values);
  console.log('user', user);
  return (
    <div className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
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
      <UserDeliveryMethodsList formik={formik}/>
      <div className={styles.divider}/>
      <p className={styles.title} id='payment'>payment method</p>
      <UserPaymentMethodsList formik={formik}/>
    </div>

  );
};

export default CheckOutUserInfoBlock;
