import React, {useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../../store/userSlice';
import {useFormik} from 'formik';
import AnonimUserContactFormBlock
  from '../../../../components/form/formBlocks/anonimUserContactFormBlock/anonimUserContactFormBlock';
import UserDeliveryMethodsList from './userDeliveryMethodsList/userDeliveryMethodsList';
import UserPaymentMethodsList from './userPaymentMethodsList/userPaymentMethodsList';
import {validationSchemaCheckOutUserData} from '../../../../utils/validationSchema';

const CheckOutUserInfoBlock = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: [],
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
      value: <AnonimUserContactFormBlock formik={formik}/>,
    },
    {
      id: '2',
      label: 'registered user',
      value: <LoginFormBlock/>,
    },
  ];
  console.log(formik);
  return (
    <div className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
      <p className={styles.title} id='contacts'>Contact details</p>
      <div className={styles.radioBlock}>
        {userCurrentDetailsList.map((detail)=> <>
          <div
            className={styles.radioWrapper}
            key={detail.id}
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
        </>)}
      </div>
      {userCurrentDetailsList.map((detail)=>
            userCurrentDetails === detail.id ? detail.value : null)}
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
