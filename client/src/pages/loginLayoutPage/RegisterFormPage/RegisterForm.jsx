import React, {useEffect, useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getError, getResponse, signUpUser, signUpWithGoogle} from '../../../store/userSlice';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaRegisterForm} from '../../../utils/validationSchema';
import googleService from '../../../services/google.service';
import transformErrorMessage from '../../../utils/generateErrorMessage';
import {Modal} from '../../../components/modal';
import ModalVerifyEmail from '../../../components/modal/modalContent/ModalVerifyEmail/ModalVerifyEmail';
import {showBodyOverflow, hideBodyOverflow} from '../../../utils/modal.service';
import RegisterFormBlock from '../../../components/form/formBlocks/RegisterFormBlock/RegisterFormBlock';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const response = useSelector(getResponse);
  const navigate = useNavigate();
  const [showVerifyEmailModal, setShowVerifyEmailModal] = useState(false);
  const [email, setEmail] = useState(null);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      license: false,
    },
    validationSchema: validationSchemaRegisterForm,
    onSubmit: (values) => {
      setIsLoading(true);
      setEmail(values.email);
      dispatch(signUpUser({...values, email: values.email.toLowerCase()}));
    },
  });
  const googleRegister = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setIsLoading(true);
      const accessToken = tokenResponse.access_token;
      googleService.get(accessToken).then((userInfo) => {
        dispatch(signUpWithGoogle({
          firstName: userInfo.given_name,
          lastName: userInfo.family_name,
          email: userInfo.email,
        }));
      });
    },
  });
  const closeModal = () => {
    setShowVerifyEmailModal(false);
    showBodyOverflow();
    navigate('/shop');
  };
  useEffect(()=>{
    if (response) {
      if (response.code === 201) {
        setShowVerifyEmailModal(true);
        hideBodyOverflow();
        formik.resetForm();
      }
    }
  }, [response]);
  return (
    <article className={styles.registerForm}>
      <section className={styles.registerForm__titleBlock}>
        <p>
          Sign up
        </p>
        <span>
          Welcome! Please enter your details
        </span>
      </section>
      <section style={{display: error ? 'block' : 'none'}}>
        {error ?
          <div className={styles.registerForm__errorMessagesBlock}>
            <p>{transformErrorMessage[error.message]}</p>
          </div> : null}
      </section>
      <RegisterFormBlock formik={formik} googleRegister={googleRegister}/>
      <p className={styles.toLoginForm}>
        Already have an account?
        <NavLink
          to="/login"
          role="button"
        >
          <span>&nbsp;Sign in</span>
        </NavLink>
      </p>
      <Modal
        isOpen={showVerifyEmailModal}
        handleCloseModal={closeModal}
      >
        <ModalVerifyEmail handleCloseModal={closeModal} email={email}/>
      </Modal>
    </article>
  );
};

export default RegisterForm;
