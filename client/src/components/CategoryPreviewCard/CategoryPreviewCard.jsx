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
      onClick={()=> navigate(item.status ? `/shop?status=${item.status}`: `/shop?status=${item._id}`)}
    >
      <img src={`${config.apiEndpoint}${item.image}`} loading='lazy' alt="category cover image"/>
      <p className={styles.title}>{item.name}</p>
    </div>
  );
};
CategoryPreviewCard.propTypes = {
  item: PropTypes.object,
};
export default CategoryPreviewCard;
