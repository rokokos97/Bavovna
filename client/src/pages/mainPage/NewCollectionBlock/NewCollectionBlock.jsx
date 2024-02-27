import React from 'react';
import styles from './NewCollectionBlock.module.scss';
import {Link} from 'react-router-dom';

const NewCollectionBlock = () => {
  return (
    <article className={styles.newCollectionBlock} data-testid="NewCollectionBlock">
      <img className={styles.newCollectionBlock__image}
        src='/img/images/NewCollection/newCollection.webp'
        alt="Interior view with a clothes rack, potted cacti,
         and a framed motivational quote reading
          'GET UP DRESS UP SHOW UP NEVER GIVE UP'"
      />
      <section className={styles.newCollectionBlock__section}>
        <h1 className={styles.newCollectionBlock__title1}>
            new collection
        </h1>
        <p className={styles.newCollectionBlock__text}>
            Together, we can transform the way we consume
            and create a brighter, greener future for generations to come
        </p>
        <Link
          to='/shop'
          aria-label="Shop the new collection now"
          className={styles.newCollectionBlock__button}
        >
          <span>shop now</span>
        </Link>
      </section>
    </article>
  );
};

export default NewCollectionBlock;
