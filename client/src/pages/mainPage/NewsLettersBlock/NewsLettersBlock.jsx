import React, {useState} from 'react';
import styles from './NewsLettersBlock.module.scss';
import {useFormik} from 'formik';
import {validationSchemaEmail} from '../../../utils/validationSchema';
import TextField from '../../../components/form/formFields/TextField/TextField';
import CloseIcon from '../../../components/svg/CloseIcon/CloseIcon';
import newsletterService from '../../../services/newsletter.service';
import generateErrorMessage from '../../../utils/generateErrorMessage';

const NewsLettersBlock = () => {
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
      newsletterService.add({email: formik.values.email})
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
    <article className={styles.newsLettersBlock}>
      <section
        className={`${styles.newsLetterBlock__messageLine} ` + (message.isError ? `${styles.newsLetterBlock__messageError}`: '')}
        style={{opacity: isMessageShowed ? '1' : '0'}}
      >
        <p className={styles.newsLettersBlock__message}>
          {message.message}
        </p>
        <button
          className={styles.newsLetterBlock__closeButton}
          type='button'
          aria-label='close message'
          onClick={()=> setIsMessageShowed(false)}
        >
          <CloseIcon/>
        </button>
      </section>
      <form
        className={styles.newsLettersBlock_form}
        data-testid="NewsLettersBlock"
        onSubmit={formik.handleSubmit}
      >
        <h2 className={styles.newsLetterBlock__title2}>
      Newsletter
        </h2>
        <p className={styles.content}>
        SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS
        AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE
        </p>
        <section className={styles.newsLetterBlock__inputSection}>
          <TextField
            name='email'
            placeholder={'Enter your e-mail'}
            autoComplete='true'
            onChange={formik.handleChange}
            error={formik.errors.email}
            value={formik.values.email}
            touched={formik.touched.email}
          />
          <button
            className={styles.newsLetterBlock__button}
            disabled={!formik.isValid || !formik.dirty}
            type='submit'
            aria-label='form submit'
          >
            <span>
              Subscribe to our newsletter
            </span>
          </button>
        </section>
      </form>
    </article>
  );
};

export default NewsLettersBlock;
