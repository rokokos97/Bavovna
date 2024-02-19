import {useDispatch, useSelector} from 'react-redux';
import {uploadItemList} from '../store/itemsSlice';
import PropTypes from 'prop-types';
import {uploadCategoriesList} from '../store/categorySlice';
import {uploadColorsList} from '../store/colorsSlice';
import {getIsLoggedIn, loadUser} from '../store/userSlice';
import {useEffect} from 'react';
import {uploadCitiesList} from '../store/citiesSlice';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    dispatch(uploadCategoriesList());
    dispatch(uploadColorsList());
    dispatch(uploadItemList());
    dispatch(uploadCitiesList());
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUser());
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
