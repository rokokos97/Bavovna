import React from //  useState
'react';
import styles from './NewsLettersBlock.module.scss';
import SubscribeForm from '../../../components/SubscribForm/SubscribeForm';
// import {useFormik} from 'formik';
import { validationSchemaEmail } from '../../../utils/validationSchema';
// import TextField from '../../../components/form/formFields/TextField/TextField';
// import CloseIcon from '../../../components/svg/CloseIcon/CloseIcon';
import newsletterService from '../../../services/newsletter.service';
import generateErrorMessage from '../../../utils/generateErrorMessage';

const NewsLettersBlock = () => {
  const isMobile = window.innerWidth <= 768;
  const handleSubmit = (values) => {
    return newsletterService
      .add({ email: values.email })
      .then((result) => ({
        message: generateErrorMessage[result.response.message],
      }))
      .catch((error) => {
        throw new Error(generateErrorMessage[error.response.data.response.message]);
      });
  };
  //  const [isMessageShowed, setIsMessageShowed] = useState(false);
  //  const [message, setMessage] = useState({
  //    message: '',
  //    isError: false,
  //  });
  //  const formik = useFormik({
  //    initialValues: {
  //      email: '',
  //    },
  //    validationSchema: validationSchemaEmail,
  //    onSubmit: () => {
  //      formik.resetForm();
  //      newsletterService.add({email: formik.values.email})
  //          .then((result)=> {
  //            if (result) {
  //              setIsMessageShowed(true);
  //              setMessage({
  //                message: generateErrorMessage[result.response.message],
  //                isError: false,
  //              });
  //            }
  //          })
  //          .catch((error)=>{
  //            if (error) {
  //              setIsMessageShowed(true);
  //              setMessage({
  //                message: generateErrorMessage[error.response.data.response.message],
  //                isError: true,
  //              });
  //            }
  //          });
  //    },
  //  });
  return (
    <article className={styles.newsLettersBlock}>
      <SubscribeForm
        buttonText={`${isMobile ? 'Subscribe' : 'Subscribe to our newsletter'}`}
        validationSchema={validationSchemaEmail}
        onSubmit={handleSubmit}
        description="SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE"
        title="Newsletter"
      />
      {/* <section*/}
      {/*  className={`${styles.newsLetterBlock__messageLine} ` + (message.isError ? `${styles.newsLetterBlock__messageError}`: '')}*/}
      {/*  style={{opacity: isMessageShowed ? '1' : '0'}}*/}
      {/* >*/}
      {/*  <p className={styles.newsLettersBlock__message}>*/}
      {/*    {message.message}*/}
      {/*  </p>*/}
      {/*  <button*/}
      {/*    className={styles.newsLetterBlock__closeButton}*/}
      {/*    type='button'*/}
      {/*    aria-label='close message'*/}
      {/*    onClick={()=> setIsMessageShowed(false)}*/}
      {/*  >*/}
      {/*    <CloseIcon/>*/}
      {/*  </button>*/}
      {/* </section>*/}
      {/* <form*/}
      {/*  className={styles.newsLettersBlock_form}*/}
      {/*  data-testid="NewsLettersBlock"*/}
      {/*  onSubmit={formik.handleSubmit}*/}
      {/* >*/}
      {/*  <h2 className={styles.newsLetterBlock__title2}>*/}
      {/* Newsletter*/}
      {/*  </h2>*/}
      {/*  <p className={styles.content}>*/}
      {/*  SIGN UP TO GET 10% OFF ON YOUR FIRST ORDER, RELEASE NOTIFICATIONS*/}
      {/*  AND EXCLUSIVE ACCESS BEFORE EVERYONE ELSE*/}
      {/*  </p>*/}
      {/*  <section className={styles.newsLetterBlock__inputSection}>*/}
      {/*    <TextField*/}
      {/*      name='email'*/}
      {/*      placeholder={'Enter your e-mail'}*/}
      {/*      autoComplete='true'*/}
      {/*      onChange={formik.handleChange}*/}
      {/*      error={formik.errors.email}*/}
      {/*      value={formik.values.email}*/}
      {/*      touched={formik.touched}*/}
      {/*    />*/}
      {/*    <button*/}
      {/*      className={styles.newsLetterBlock__button}*/}
      {/*      disabled={!formik.isValid || !formik.dirty}*/}
      {/*      type='submit'*/}
      {/*      aria-label='form submit'*/}
      {/*    >*/}
      {/*      <span>*/}
      {/*        Subscribe to our newsletter*/}
      {/*      </span>*/}
      {/*    </button>*/}
      {/*  </section>*/}
      {/* </form>*/}
    </article>
  );
};

export default NewsLettersBlock;
