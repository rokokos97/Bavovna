import {useDispatch} from 'react-redux';
import {uploadItemList} from '../store/itemsSlice';
import PropTypes from 'prop-types';

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  dispatch(uploadItemList());
  return children;
};
AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
