import {useState, useEffect} from 'react';
import generateErrorMessage from './generateErrorMessage';

function useErrorMessage(authError) {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const message = authError ? generateErrorMessage[authError.message] : null;
    setErrorMessage(message);
  }, [authError]);

  useEffect(() => {
    const clearErrorMessage = () => {
      if (errorMessage) {
        setErrorMessage(null);
      }
    };
    window.addEventListener('click', clearErrorMessage);
    return () => {
      window.removeEventListener('click', clearErrorMessage);
    };
  }, [errorMessage]);

  return [errorMessage, setErrorMessage];
}

export default useErrorMessage;
