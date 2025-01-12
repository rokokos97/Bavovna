import React, { useEffect, useState } from 'react';
import styles from './UnsubscribePage.module.scss';
// import SubscribeForm from '../../components/SubscribForm/SubscribeForm';
// import {validationSchemaEmail} from '../../utils/validationSchema';
import newsletterService from '../../services/newsletter.service';
import generateErrorMessage from '../../utils/generateErrorMessage';
import { NavLink, useNavigate } from 'react-router-dom';

// const UnsubscribePage = () => {
//  const handleSubmit = (values) => {
//    return newsletterService.unsubscribe({email: values.email})
//        .then((result) => ({
//          message: generateErrorMessage[result.response.message],
//        }))
//        .catch((error) => {
//          throw new Error(generateErrorMessage[error.response.data.response.message]);
//        });
//  };
//  return (
//    <div className={styles.unsubscribePage}>
//      <SubscribeForm
//        buttonText='Unsubscribe'
//        validationSchema={validationSchemaEmail}
//        onSubmit={handleSubmit}
//        description='If you really want to unsubscribe from our newsletter, please enter your e-mail'
//        title='Unsubscribe'
//      />
//    </div>
//  );
// };
const UnsubscribePage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    } else {
      navigate('/', { replace: true });
    }
  }, []);

  const handleSubmit = () => {
    newsletterService
      .unsubscribe({ email: email })
      .then((result) => {
        if (result) {
          console.log('result', result);
          setMessage(generateErrorMessage[result.response.message]);
        }
      })
      .catch((error) => {
        if (error) {
          console.log('error', error);
          setMessage(generateErrorMessage[error.response.data.response.message]);
        }
      });
  };
  return email && !message ? (
    <article className={styles.unsubscribePage}>
      <section className={styles.unsubscribePage__container}>
        <h2 className={styles.unsubscribePage__title}>Are you sure you want to unsubscribe?</h2>
        <div>
          <p className={styles.unsubscribePage__text}>
            You are currently subscribed to BAVOVNA store with the following address:
          </p>
          <br />
          <p className={styles.unsubscribePage__email}>{email}</p>
        </div>
        <div className={styles.unsubscribePage__buttonsBlock}>
          <button onClick={handleSubmit} className={styles.unsubscribePage__button}>
            <span>yes</span>
          </button>
          <NavLink to={'/'} className={styles.unsubscribePage__button}>
            <span>no</span>
          </NavLink>
        </div>
      </section>
    </article>
  ) : (
    <article className={styles.unsubscribePage}>
      <section className={styles.unsubscribePage__container}>
        <h2 className={styles.unsubscribePage__title}>We&#39;re Sorry to See You Go</h2>
        <p className={styles.unsubscribePage__message}>{message}</p>
        <p className={styles.unsubscribePage__regards}>
          Best regards,
          <br />
          <b>BAVOVNA</b> Support Team
        </p>
      </section>
    </article>
  );
};

export default UnsubscribePage;
