import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import generateErrorMessage from './generateErrorMessage';
import { userClearResponse } from '../store/userSlice';

function useErrorMessage(authError) {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Встановлює повідомлення про помилку, якщо воно існує
    setErrorMessage(authError ? generateErrorMessage[authError.message] : null);

    // Функція для очищення помилок
    const clearErrorMessage = () => {
      if (errorMessage) {
        setErrorMessage(null);
        dispatch(userClearResponse());
      }
    };

    // Очищення помилок при кліці або натисканні клавіш
    window.addEventListener('click', clearErrorMessage);
    window.addEventListener('keydown', clearErrorMessage);

    return () => {
      window.removeEventListener('click', clearErrorMessage);
      window.removeEventListener('keydown', clearErrorMessage);
    };
  }, [authError, errorMessage, dispatch]);

  return errorMessage;
}

export default useErrorMessage;
