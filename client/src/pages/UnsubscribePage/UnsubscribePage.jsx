import React from 'react';
import styles from './UnsubscribePage.module.scss';
import SubscribeForm from '../../components/SubscribForm/SubscribeForm';
import {validationSchemaEmail} from '../../utils/validationSchema';
import newsletterService from '../../services/newsletter.service';
import generateErrorMessage from '../../utils/generateErrorMessage';

const UnsubscribePage = () => {
  const handleSubmit = (values) => {
    return newsletterService.unsubscribe({email: values.email})
        .then((result) => ({
          message: generateErrorMessage[result.response.message],
        }))
        .catch((error) => {
          throw new Error(generateErrorMessage[error.response.data.response.message]);
        });
  };
  return (
    <div className={styles.unsubscribePage}>
      <SubscribeForm
        buttonText='Unsubscribe'
        validationSchema={validationSchemaEmail}
        onSubmit={handleSubmit}
        description='If you really want to unsubscribe from our newsletter, please enter your e-mail'
        title='Unsubscribe'
      />
    </div>
  );
};

export default UnsubscribePage;
