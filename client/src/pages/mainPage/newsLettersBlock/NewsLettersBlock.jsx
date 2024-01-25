import React, {useState} from 'react';
import styles from './NewsLettersBlock.module.scss';
import {useFormik} from 'formik';
import {validationSchemaNewsletterForm} from '../../../utils/validationSchema';
import TextField from '../../../components/form/formFields/textField/textField';
import CloseIcon from '../../../components/svg/closeIcon/CloseIcon';

const NewsLettersBlock = () => {
  const [isMessageShowed, setIsMessageShowed] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchemaNewsletterForm,
    onSubmit: () => {
      formik.resetForm();
      setIsMessageShowed(true);
    },
  });
  return (
    <div>
      <p
        className={styles.messageLine}
        style={{display: isMessageShowed ? 'flex' : 'none'}}
      >
        <span>
          A subscription confirmation email has been sent to your email address
        </span>
        <button
          className={styles.closeButton}
          onClick={()=> setIsMessageShowed(false)}
        >
          <CloseIcon/>
        </button>
      </p>
      <form
        className={styles.newsLettersBlock}
        data-testid="NewsLettersBlock"
        onSubmit={formik.handleSubmit}
      >
        <span className={styles.title}>
      Newsletter
        </span>
        <span className={styles.content}>
        SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS
        AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE
        </span>
        <div className={styles.input}>
          <TextField
            onChange={formik.handleChange}
            name='email'
            placeholder={'Enter your e-mail'}
            autoComplete='false'
            error={formik.errors.email}
            value={formik.values.email}
          />
          <button
            className={styles.button}
            type='submit'
          >
            <span>
        Subscribe to our newsletter
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLettersBlock;
