import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoggedIn } from '../store/userSlice';
import PropTypes from 'prop-types';
const GuestRoutes = ({ children, redirectTo = '/' }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectTo);
    }
  }, [isLoggedIn, navigate, redirectTo]);
  return !isLoggedIn ? children : null;
};
GuestRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
export default GuestRoutes;
