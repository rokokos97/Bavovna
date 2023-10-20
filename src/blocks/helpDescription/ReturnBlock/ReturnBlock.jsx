import React from 'react';
import Dropdown from '../../../components/dropdown/Dropdown';
import styles from './ReturnBlock.module.scss';

const ReturnBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>Return information</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Details</h3>
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
            id='dropdownToggle'
            placeholder='Good quality product'
            name='Good'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Poor quality product'
            name='Poor'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Return procedure</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque.
          </p>
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Return methods</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque. Vel pharetra nunc dui
            feugiat consequat. Fermentum orci mi ac vitae. Vel pharetra nunc dui
            feugiat consequat. Fermentum orci mi ac vitae.
          </p>
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Refunds</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque. Vel pharetra nunc dui
            feugiat consequat. Fermentum orci mi ac vitae.
          </p>
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Term of payment of funds</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque. Vel pharetra nunc dui
            feugiat consequat. Fermentum orci mi ac vitae.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReturnBlock;
