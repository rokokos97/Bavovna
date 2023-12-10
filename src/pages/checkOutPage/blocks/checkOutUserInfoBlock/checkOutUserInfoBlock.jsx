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
import UserDeliveryMethodsList from '../../../../components/userDeliveryMethodsList/userDeliveryMethodsList';

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
    },
  });
  const userCurrentDetailsList = [
    {
      id: '1',
      label: 'new user',
      component: <AnonimUserContactFormBlock formik={formik}/>,
    },
    {
      id: '2',
      label: 'registered user',
      component: <LoginFormBlock />,
    },
  ];
  return (
    <div className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
      <p className={styles.title}>Contact details</p>
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
            userCurrentDetails === detail.id ? detail.component:null)}
      <div className={styles.divider}/>
      <p className={styles.title}>delivery</p>
      <UserDeliveryMethodsList formik={formik}/>
      <div className={styles.divider}/>
    </div>

  );
};

export default CheckOutUserInfoBlock;
