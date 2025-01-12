import React from 'react';
import styles from './WishListBlock.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/userSlice';
import ItemsList from '../../ItemsList/ItemsList';
import EmptyBlock from '../../../blocks/EmptyBlock/EmptyBlock';
const WishListBlock = () => {
  const user = useSelector(getUser);
  const isDesktop = window.matchMedia('(min-width: 1280px)').matches;
  return (
    user && (
      <article className={styles.wishListBlock} data-testid="WishListBlock">
        {isDesktop && <h2 className={styles.wishListBlock__title}>wishlist</h2>}
        <section>
          {user.favorite && user.favorite.length > 0 ? (
            <ItemsList idArray={user.favorite} />
          ) : (
            <EmptyBlock description="Your wishlist is empty." />
          )}
        </section>
      </article>
    )
  );
};

export default WishListBlock;
