import React from 'react';
import styles from './CategoryPreviewCard.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryPreviewCard = ({ item }) => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  return (
    <Link
      className={styles.categoryPreviewCard}
      data-testid="CategoryPreviewCard"
      to={item.status ? `/shop?status=${item.status}` : `/shop?status=${item._id}`}
    >
      <picture className={styles.imageBox}>
        <img
          src={`${apiEndpoint}${item.image}`}
          width="193"
          height="140"
          loading="lazy"
          alt={item.name}
        />
      </picture>
      <p className={styles.categoryPreviewCard__title}>{item.name}</p>
    </Link>
  );
};
CategoryPreviewCard.propTypes = {
  item: PropTypes.object,
};
export default CategoryPreviewCard;
