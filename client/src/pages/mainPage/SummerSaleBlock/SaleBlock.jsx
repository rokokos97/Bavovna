import React from 'react';
import styles from './SaleBlock.module.scss';
import { Link } from 'react-router-dom';

const SaleBlock = () => {
  return (
    <article className={styles.saleBlock} data-testid="SaleBlock">
      <picture className={styles.saleBlockBlock__image}>
        <source
          media="(min-width: 769px)"
          width="1440"
          height="376"
          srcSet="/img/images/Sale/saleBlockImage.webp"
        />
        <source
          media="(min-width: 581px)"
          width="768"
          srcSet="/img/images/Sale/tabletSaleBlockImage.webp"
        />
        <img
          src="/img/images/Sale/mobileSaleBlockImage.webp"
          width="360"
          height="212"
          loading="lazy"
          alt="Flat lay of a plain white T-shirt,
         a lifestyle magazine with plants on the cover,
         and a wooden board with fresh green leaves arranged on it,
         suggesting a natural and minimalist lifestyle"
        />
      </picture>
      <section className={styles.saleBlock__contentBlock}>
        <h2 className={styles.saleBlock__title2}>summer sale</h2>
        <Link
          className={styles.saleBlock__button}
          aria-label="go to catalogue page"
          to="/shop?status=sale"
        >
          <span>shop now</span>
        </Link>
      </section>
    </article>
  );
};

export default SaleBlock;
