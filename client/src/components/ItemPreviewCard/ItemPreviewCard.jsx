import React from 'react';
import styles from './ItemPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import FillHeartIcon from '../svg/fillHeartIcon/fillHeartIcon';
import EmptyHeartIcon from '../svg/emptyHeartIcon/emptyHeartIcon';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getItemsById} from '../../store/itemsSlice';
import {getUser} from '../../store/userSlice';
import useChangeFavorite from '../../services/useChangeFavorite';

const ItemPreviewCard = ({id}) => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const item = useSelector(getItemsById(id));
  const [isFavorite, handleIsFavorite] = useChangeFavorite(user, id);

  return (
    item && (
      <div
        className={
          item.status !== 'sold-out' ?
            `${styles.itemPreviewCard}` :
            `${styles.itemPreviewCard} ${styles.disabledItemPreviewCard}`
        }
        data-testid='ItemPreviewCard'
      >
        <div
          className={
            item.status !== 'sold-out' ?
              `${styles.itemPreviewCard__image}` :
              `${styles.itemPreviewCard__image} ${styles.disabledItemPreviewCard__image}`
          }
          onClick={() => navigate(`/shop/${item._id}`)}
        >
          <img
            src={`${config.apiEndpoint}${item.images[0]}`}
            alt='item image'
          />
        </div>
        {item.status && (
          <div
            className={styles.itemPreviewCard__status}
            onClick={() => navigate(`/shop?status=${item.status}`)}
          >
            <div className={styles.itemPreviewCard__statusText}>
              {item.status}
            </div>
          </div>
        )}
        <div
          className={styles.itemPreviewCard__heart}
          onClick={() => handleIsFavorite()}
        >
          {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
        </div>
        <div
          className={styles.itemPreviewCard__description}
          onClick={() => navigate(`/shop/${item._id}`)}
        >
          <span>{item.name}</span>
          <p>${item.price}</p>
        </div>
      </div>
    )
  );
};

ItemPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ItemPreviewCard;
