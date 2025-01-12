import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserData } from '../store/userSlice';

const useChangeFavorite = (user, id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      setFavorite(user.favorite.includes(id));
    }
  }, [user, id]);
  const handleIsFavorite = () => {
    if (user) {
      if (isFavorite) {
        dispatch(
          updateUserData({ ...user, favorite: user.favorite.filter((item) => item !== id) })
        );
      } else {
        dispatch(updateUserData({ ...user, favorite: [...user.favorite, id] }));
      }
    } else {
      navigate('/signIn');
    }
  };
  return [isFavorite, handleIsFavorite];
};

useChangeFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default useChangeFavorite;
