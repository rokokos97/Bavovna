import React from 'react';
import Dropdown from '../../../components/dropdown/Dropdown';
import styles from './FaqBlock.module.scss';

const FaqBlock = () => {
  return (
    <>
      <h2 className={styles.helpTitle}>FAQ</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire
        practical skills. The site does not have a commercial basis and none of
        the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Products</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Duis amet adipiscing at
            faucibus. Tempus varius tellus tellus vivamus scelerisque elit. Odio
            risus elementum dui gravida in pellentesque aliquam. Odio sed
            blandit amet gravida at nisi vitae tristique commodo. Arcu lectus
            ultrices lectus cursus tortor sed est elit. Bibendum elementum sit
            rhoncus diam eu erat rutrum augue nulla.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Table of sizes'
            name='sizes'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Availability of goods'
            name='availability'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Pricing policy'
            name='policy'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Order</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Availability of goods'
            name='availability'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='What happens after placing an order?'
            name='happens'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Order tracking'
            name='tracking'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownToggle'
            placeholder='Order cancellation'
            name='cancellation'
            inner='Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor.'
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Technical problems</h3>
          <p className={styles.detailsParagraph}>
            Lorem ipsum dolor sit amet consectetur. Tellus quis commodo varius
            justo non ultrices hac molestie dolor. Luctus faucibus pulvinar
            ornare lectus scelerisque etiam eu quis neque.
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqBlock;
