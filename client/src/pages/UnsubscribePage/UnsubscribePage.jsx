import React, {useState} from 'react';
import styles from './UnsubscribePage.module.scss';
import {useFormik} from 'formik';
import {validationSchemaEmail} from '../../utils/validationSchema';
import newsletterService from '../../services/newsletter.service';
import generateErrorMessage from '../../utils/generateErrorMessage';
import CloseIcon from '../../components/svg/CloseIcon/CloseIcon';
import TextField from '../../components/form/formFields/TextField/TextField';

const UnsubscribePage = () => {
  const [isMessageShowed, setIsMessageShowed] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    isError: false,
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchemaEmail,
    onSubmit: () => {
      formik.resetForm();
      newsletterService.unsubscribe({email: formik.values.email})
          .then((result)=> {
            if (result) {
              setIsMessageShowed(true);
              setMessage({
                message: 'A subscription confirmation email has been sent to your email address',
                isError: false,
              });
            }
          })
          .catch((error)=>{
            if (error) {
              setIsMessageShowed(true);
              setMessage({
                message: generateErrorMessage[error.response.data.response.message],
                isError: true,
              });
            }
          });
    },
  });
  return (
    <article className={styles.unsubscribePage}>
      <section
        className={`${styles.unsubscribePage__messageLine} ` + (message.isError ? `${styles.unsubscribePage__messageError}`: '')}
        style={{opacity: isMessageShowed ? '1' : '0'}}
      >
        <p className={styles.unsubscribePage__message}>
          {message.message}
        </p>
        <button
          className={styles.unsubscribePage__closeButton}
          type='button'
          aria-label='close message'
          onClick={()=> setIsMessageShowed(false)}
        >
          <CloseIcon/>
        </button>
      </section>
      <form
        className={styles.unsubscribePage_form}
        data-testid="NewsLettersBlock"
        onSubmit={formik.handleSubmit}
      >
        <h2 className={styles.unsubscribePage__title2}>
          unsubscribe
        </h2>
        <p className={styles.unsubscribePage__content}>
          if you are really want to unsubscribe from our newsletter<br/>
          please enter your e-mail
        </p>
        <section className={styles.unsubscribePage__inputSection}>
          <TextField
            name='email'
            placeholder={'Enter your e-mail'}
            autoComplete='true'
            onChange={formik.handleChange}
            error={formik.errors.email}
            value={formik.values.email}
            touched={formik.touched}
          />
          <button
            className={styles.unsubscribePage__button}
            disabled={!formik.isValid || !formik.dirty}
            type='submit'
            aria-label='form submit'
          >
            <span>
              unsubscribe
            </span>
          </button>
        </section>
      </form>
    </article>
  );
};

export default UnsubscribePage;
