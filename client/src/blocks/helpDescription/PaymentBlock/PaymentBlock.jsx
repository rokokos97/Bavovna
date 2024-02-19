import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import styles from './PaymentBlock.module.scss';

const PaymentBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>Payment</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Payment upon placing an order</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Interdum tristique quis
            rhoncus etiam proin malesuada et egestas quis. Turpis lobortis
            aenean eget cum. Vitae lacinia turpis volutpat facilisi blandit
            ornare arcu nibh non. Porttitor nunc volutpat fringilla porttitor
            sed. Dignissim pharetra in odio non sit.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Bank card'
            name='bank'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Cashback, bonuses, promo codes'
            name='cashback'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Payment upon receipt</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Cash'
            name='cash'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Bank card'
            name='card'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
      </div>
    </>
  );
};

export default PaymentBlock;
