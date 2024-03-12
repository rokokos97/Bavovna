import {useDispatch, useSelector} from 'react-redux';
import {uploadItemList} from '../store/itemsSlice';
import PropTypes from 'prop-types';
import {fetchCategoriesList} from '../store/categorySlice';
import {fetchColorsList} from '../store/colorsSlice';
import {getIsLoggedIn, fetchUserData} from '../store/userSlice';
import {useEffect} from 'react';
import {uploadCitiesList} from '../store/citiesSlice';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    dispatch(fetchCategoriesList());
    dispatch(fetchColorsList());
    dispatch(uploadItemList());
    dispatch(uploadCitiesList());
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
