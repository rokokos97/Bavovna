import React, {useEffect, useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getError, getResponse, signUpUser, signUpWithGoogle, signUpWithLinkedin} from '../../../store/userSlice';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaRegisterForm} from '../../../utils/validationSchema';
import googleService from '../../../services/google.service';
import {Modal} from '../../../components/modal';
import ModalVerifyEmail from '../../../components/modal/modalContent/ModalVerifyEmail/ModalVerifyEmail';
import {showBodyOverflow, hideBodyOverflow} from '../../../utils/modal.service';
import RegisterFormBlock from '../../../components/form/formBlocks/RegisterFormBlock/RegisterFormBlock';
import useErrorMessage from '../../../utils/useErrorMessage';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(getError);
  const response = useSelector(getResponse);
  const navigate = useNavigate();
  const errorMessage = useErrorMessage(authError);
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
  const linkedinRegister = () => {
    dispatch(signUpWithLinkedin());
  };
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
  return (
    <article className={styles.registerForm}>
      <section className={styles.registerForm__titleBlock}>
        <p>
          Sign up
        </p>
        <p>
          Welcome! Please enter your details
        </p>
      </section>
      {errorMessage ?
          <div className={styles.registerForm__errorMessagesBlock}>
            <p>{errorMessage}</p>
          </div> : null
      }
      <RegisterFormBlock
        formik={formik}
        googleRegister={googleRegister}
        isRegularSignUp={isRegularSignUp}
        isGoogleSignUp={isGoogleSignUp}
        linkedinRegister={linkedinRegister}
      />
      <p className={styles.registerForm__backToSignIn}>
        Already have an account?&nbsp;
        <NavLink
          to="/signIn"
          title='go to sign in page'
          aria-label='go to sign ip page'
          className={styles.registerForm__backToSignInLink}
        >
          <span>Sign in</span>
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
