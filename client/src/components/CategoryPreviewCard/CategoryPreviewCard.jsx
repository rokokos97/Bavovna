import React from 'react';
import styles from './CategoryPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import {Link} from 'react-router-dom';


const CategoryPreviewCard = ({item}) => {
  return (
    <Link
      className={styles.categoryPreviewCard}
      data-testid="CategoryPreviewCard"
      to={item.status ? `/shop?status=${item.status}`: `/shop?status=${item._id}`}
    >
      <img src={`${config.apiEndpoint}${item.image}`} width='193' height='140' loading='lazy' alt="category cover image"/>
      <p className={styles.categoryPreviewCard__title}>{item.name}</p>
    </Link>
  );
};
CategoryPreviewCard.propTypes = {
  item: PropTypes.object,
};
export default CategoryPreviewCard;
