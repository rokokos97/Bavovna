import React, {useEffect, useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';
import {useFormik} from 'formik';
import UnknownUserContactFormBlock
  from '../../../../components/form/formBlocks/anonimUserContactFormBlock/unknownUserContactFormBlock';
import LeftArrowIcon from '../../../../components/svg/leftArrowIcon/leftArrowIcon';
import RightArrowIcon from '../../../../components/svg/rightArrowIcon/rightArrowIcon';
import {useNavigate} from 'react-router-dom';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoggedIn, getUser} from '../../../../store/userSlice';
import {validationSchemaCheckOutUserInfo} from '../../../../utils/validationSchema';
import {setUserInfo} from '../../../../store/ordersSlice';

const CheckOutUserInfoBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    validationSchema: validationSchemaCheckOutUserInfo,
    onSubmit: async (values)=> {
      console.log(values);
      dispatch(setUserInfo(values));
      navigate('/cart/checkoutDelivery');
    },
  });
  const userCurrentDetailsList = [
    {
      id: '1',
      label: 'new user',
      value: <UnknownUserContactFormBlock formik={formik}/>,
    },
    {
      id: '2',
      label: 'registered user',
      value: <LoginFormBlock/>,
    },
  ];
  useEffect(() => {
    if (user) {
      formik.setValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);
  return (
    <div className={styles.checkOutUserInfoBlock}>
      <p className={styles.title}>Contact details</p>
      <div className={styles.radioBlock}>
        {userCurrentDetailsList.map((detail, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
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
      {userCurrentDetails === '2' && userCurrentDetailsList[0].value}
      <form onSubmit={formik.handleSubmit} className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
        {userCurrentDetails === '1' && userCurrentDetailsList[0].value}
        <div className={styles.navigationButtonsSection}>
          <button
            type='button'
            onClick={()=> navigate(-1) }
            className={styles.buttonLeft}
          >
            <LeftArrowIcon/>
            <span>
              go back
            </span>
          </button>
          <button
            className={styles.buttonRight}
            type='submit'
            disabled={!formik.isValid || !formik.dirty}
          >
            <span>
              next step
            </span>
            <RightArrowIcon/>
          </button>
        </div>
      </form>
    </div>
  );
};
export default CheckOutUserInfoBlock;
