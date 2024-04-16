import React, {useEffect, useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getError, getResponse, signUpUser, signUpWithGoogle, userClearResponse} from '../../../store/userSlice';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaRegisterForm} from '../../../utils/validationSchema';
import googleService from '../../../services/google.service';
import {Modal} from '../../../components/modal';
import ModalVerifyEmail from '../../../components/modal/modalContent/ModalVerifyEmail/ModalVerifyEmail';
import {showBodyOverflow, hideBodyOverflow} from '../../../utils/modal.service';
import RegisterFormBlock from '../../../components/form/formBlocks/RegisterFormBlock/RegisterFormBlock';
import generateErrorMessage from '../../../utils/generateErrorMessage';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(getError);
  const response = useSelector(getResponse);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isRegularSignUp, setIsRegularSignUp] = useState(false);
  const [isGoogleSignUp, setIsGoogleSignUp] = useState(false);
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
      setIsRegularSignUp(true);
      setIsGoogleSignUp(false);
      setEmail(values.email);
      dispatch(signUpUser({...values, email: values.email.toLowerCase()})).then(()=>{
        setIsRegularSignUp(true);
      });
      formik.resetForm();
    },
  });
  const googleRegister = useGoogleLogin({
    onSuccess: (tokenResponse) => {
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
    navigate('/signIn');
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
  useEffect(() => {
    const message = authError ? generateErrorMessage[authError.message]:null;
    setErrorMessage(message);
  }, [authError]);
  useEffect(() => {
    const clearErrorMessage = () => {
      if (errorMessage ) {
        setErrorMessage(null);
      }
    };
    window.addEventListener('click', clearErrorMessage);
    return () => {
      window.removeEventListener('click', clearErrorMessage);
    };
  }, [errorMessage]);
  useEffect(() => {
    setErrorMessage(null);
    dispatch(userClearResponse());
  }, []);
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
      {errorMessage ?
          <div className={styles.registerForm__errorMessagesBlock}>
            <p>{errorMessage}</p>
          </div> : null
      }
      <RegisterFormBlock formik={formik} googleRegister={googleRegister} isRegularSignUp={isRegularSignUp} isGoogleSignUp={isGoogleSignUp}/>
      <p className={styles.toLoginForm}>
        Already have an account?
        <NavLink
          to="/signIn"
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
