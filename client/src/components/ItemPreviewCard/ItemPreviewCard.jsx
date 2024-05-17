import React from 'react';
import styles from './ItemPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getItemsById} from '../../store/itemsSlice';
import {getUser} from '../../store/userSlice';
import useChangeFavorite from '../../utils/useChangeFavorite';
import FillHeartIcon from '../svg/favoriteIcons/FillHeartIcon/FillHeartIcon';
import EmptyHeartIcon from '../svg/favoriteIcons/EmptyHeartIcon/EmptyHeartIcon';

const ItemPreviewCard = ({id}) => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const item = useSelector(getItemsById(id));
  const [isFavorite, handleIsFavorite] = useChangeFavorite(user, id);
  const discountPrice = item.price*(item.sale/100);
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
            loading='lazy'
            alt='clothes item image'
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
          <p className={styles.itemPreviewCard__name}>{item.name}</p>
          <p className={(discountPrice === 0)? styles.itemPreviewCard__price : styles.itemPreviewCard__discount}>
            <span>
              ₴ {item.price}
            </span>
            {
              item.sale !==0 && <span>₴ {discountPrice}</span>
            }
          </p>
        </div>
      </div>
    )
  );
};

ItemPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ItemPreviewCard;
