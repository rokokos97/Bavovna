import React from 'react';
import styles from './ItemPreviewCard.module.scss';
import PropTypes from 'prop-types';
import config from '../../config.json';
import FillHeartIcon from '../svg/fillHeartIcon/fillHeartIcon';
import EmptyHeartIcon from '../svg/emptyHeartIcon/emptyHeartIcon';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getItemsById} from '../../store/itemsSlice';
import {getUser, updateUser} from '../../store/userSlice';

const ItemPreviewCard = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const item = useSelector(getItemsById(id));
  let isFavorite = false;
  if (user) {
    isFavorite = user.favorite.includes(id);
  }
  const handleChangeFavorite = () => {
    if (user) {
      if (isFavorite) {
        const userFavorite = user.favorite.filter((item) => item !== id);
        dispatch(updateUser({...user, favorite: userFavorite}));
      } else {
        dispatch(updateUser({...user, favorite: [...user.favorite, id]}));
      }
    } else {
      navigate('/logIn');
    }
  };
  return (
    <div
      className={styles.itemPreviewCard}
      data-testid="ItemPreviewCard"
    >
      <div
        className={styles.itemPreviewCard__image}
        onClick={()=> navigate(`/catalogue/${item._id}`)}
      >
        <img
          src={`${config.apiEndpoint}${item.images[0]}`}
          alt="item image"
        />
      </div>
      {
        item.status &&
        <div
          className={styles.itemPreviewCard__status}
          onClick={()=> navigate('/catalogue')}
        >
          <div className={styles.itemPreviewCard__statusText}>
            {item.status}
          </div>
        </div>
      }
      <div
        className={styles.itemPreviewCard__heart}
        onClick = {handleChangeFavorite}
      >
        {isFavorite ? <FillHeartIcon /> : <EmptyHeartIcon />}
      </div>
      <div
        className={styles.itemPreviewCard__description}
        onClick={()=> navigate(`catalogue/${item._id}`)}
      >
        <span>
          {item.name}
        </span>
        <p>
          ${item.price}
        </p>
      </div>
    </div>
  );
};

ItemPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ItemPreviewCard;
