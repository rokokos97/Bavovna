import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import TextField from '../../components/form/formFields/TextField/TextField';
import CloseIcon from '../../components/svg/CloseIcon/CloseIcon';
import styles from './SubscribeForm.module.scss';

const SubscribeForm = ({title, description, buttonText, onSubmit, validationSchema}) => {
  const [isMessageShowed, setIsMessageShowed] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    isError: false,
  });

  const formik = useFormik({
    initialValues: {email: ''},
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      onSubmit(values)
          .then((result) => {
            if (result) {
              setIsMessageShowed(true);
              setMessage({message: result.message, isError: false});
              resetForm();
            }
          })
          .catch((error) => {
            if (error) {
              setIsMessageShowed(true);
              setMessage({message: error.message, isError: true});
            }
          });
    },
  });

  return (
    <article className={styles.subscribeForm}>
      <section
        className={`${styles.messageLine} ${message.isError ? styles.messageError : ''}`}
        style={{opacity: isMessageShowed ? '1' : '0'}}
      >
        <p className={styles.message}>{message.message}</p>
        <button
          className={styles.closeButton}
          type='button'
          aria-label='close message'
          onClick={() => setIsMessageShowed(false)}
        >
          <CloseIcon />
        </button>
      </section>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <section className={styles.inputSection}>
          <TextField
            name='email'
            placeholder='Enter your e-mail'
            autoComplete='true'
            onChange={formik.handleChange}
            error={formik.errors.email}
            value={formik.values.email}
            touched={formik.touched}
          />
          <button
            className={styles.button}
            disabled={!formik.dirty}
            type='submit'
            aria-label='form submit'
          >
            <span>{buttonText}</span>
          </button>
        </section>
      </form>
    </article>
  );
};

SubscribeForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
};

export default SubscribeForm;
