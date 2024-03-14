import {useDispatch, useSelector} from 'react-redux';
import {fetchItemsList} from '../store/itemsSlice';
import PropTypes from 'prop-types';
import {fetchCategoriesList} from '../store/categorySlice';
import {fetchColorsList} from '../store/colorsSlice';
import {getIsLoggedIn, fetchUserData} from '../store/userSlice';
import {useEffect} from 'react';
import {fetchCitiesList} from '../store/citiesSlice';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchColorsList());
    dispatch(fetchItemsList);
    dispatch(fetchCitiesList);
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUserData());
    }
  }, [isLoggedIn]);
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
