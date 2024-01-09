import React from 'react';
import styles from './wishListBlock.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../../store/userSlice';
import ItemsList from '../../../../components/itemsList/itemsList';
import EmptyBlock from '../../../../blocks/emptyBlock/emptyBlock';
import Loader from '../../../../components/loader/loader';

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
