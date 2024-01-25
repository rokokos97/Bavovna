import React from 'react';
import styles from './CategoryPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import {useNavigate} from 'react-router-dom';


const CategoryPreviewCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.categoryPreviewCard}
      data-testid="CategoryPreviewCard"
      onClick={()=> item.status ? navigate(`/shop?status=${item.status}`): null}
    >
      <img src={`${config.apiEndpoint}${item.image}`} alt="category cover image"/>
      <p>{item.name}</p>
    </div>
  );
};
CategoryPreviewCard.propTypes = {
  item: PropTypes.object,
};
export default CategoryPreviewCard;
