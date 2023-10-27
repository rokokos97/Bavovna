import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../store/userSlice';
import PropTypes from 'prop-types';


const GuestRoutes = ({children}) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    navigate('/');
    return null;
  }
  return children;
};

GuestRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestRoutes;
