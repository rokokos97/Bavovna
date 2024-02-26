import React from 'react';
import styles from './SaleBlock.module.scss';
import {Link} from 'react-router-dom';

const SaleBlock = () => {
  return (
    <article className={styles.saleBlock} data-testid="SaleBlock">
      <img
        src='/img/images/Sale/saleBlockImage.jpeg'
        loading='lazy'
        alt='Flat lay of a plain white T-shirt,
         a lifestyle magazine with plants on the cover,
         and a wooden board with fresh green leaves arranged on it,
         suggesting a natural and minimalist lifestyle'
      />
      <section className={styles.saleBlock__contentBlock}>
        <h2 className={styles.saleBlock__title2}>summer sale</h2>
        <Link
          className={styles.saleBlock__button}
          aria-label='go to catalogue page'
          to="/shop"
        >
          <span>shop now</span>
        </Link>
      </section>
    </article>
  );
};

export default SaleBlock;
