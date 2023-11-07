import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getIsLoggedIn} from '../store/userSlice';
import PropTypes from 'prop-types';

// Компонент для захисту роутів призначених для неавторизованих користувачів
const GuestRoutes = ({children, redirectTo = '/'}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn());

  // Редірект авторизованих користувачів з гостьових роутів
  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectTo);
    }
  }, [isLoggedIn, navigate, redirectTo]);

  // Показуємо компонент тільки для неавторизованих користувачів
  return !isLoggedIn ? children : null;
};

GuestRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string, // Необов'язковий prop для налаштування шляху редіректу
};

export default GuestRoutes;
