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
    <article className={styles.wishListBlock} data-testid="WishListBlock">
      <h2 className={styles.wishListBlock__title}>wishlist</h2>
      <section>
        {(user.favorite.length > 0) ?
          <ItemsList
            idArray={user.favorite}
          /> :
            <EmptyBlock
              description='Your wishlist is empty.'
            />
        }
      </section>
    </article>
  );
};

export default WishListBlock;
