import React from 'react';
import Dropdown from '../../../../components/dropdown/Dropdown';
import styles from './DeliveryBlock.module.scss';

const DeliveryBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>Delivery information</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Details</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque. Vel pharetra nunc dui
            feugiat consequat. Fermentum orci mi ac vitae.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Nova poshta delivery to the post office'
            name='postOffice'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Nova poshta delivery to the address'
            name='address'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='International delivery'
            name='internationalDelivery'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryBlock;
