import React from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const FacebookLoginButton = () => {
  const handleResponse = (response) => {
    console.log(response);
    // Додайте вашу логіку обробки відповіді Facebook тут
  };

  const handleError = (error) => {
    console.error(error);
    // Додайте вашу логіку обробки помилок тут
  };

  return (
    <FacebookLogin
      appId="470601928781087" // Замініть YOUR_APP_ID на ваш App ID
      onSuccess={handleResponse}
      onFail={handleError}
      onProfileSuccess={handleResponse}
      render={({ onClick }) => <button onClick={onClick}>Sign In with Facebook</button>}
    />
  );
};

export default FacebookLoginButton;
