import React from 'react';
import styles from './WishListBlock.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../../store/userSlice';
import ItemsList from '../../../../components/ItemsList/ItemsList';
import EmptyBlock from '../../../../blocks/EmptyBlock/EmptyBlock';
import Loader from '../../../../components/Loader/Loader';

const WishListBlock = () => {
  const user = useSelector(getUser);
  if (!user) {
    return <Loader/>;
  }
  return (
    <div className={styles.wishListBlock} data-testid="WishListBlock">
      <p className={styles.title}>wishlist</p>
      <div>
        {(user.favorite.length > 0) ?
          <ItemsList
            idArray={user.favorite}
          /> :
            <EmptyBlock
              description='Your wishlist is empty.'
            />
        }
      </div>
    </div>
  );
};

export default WishListBlock;
