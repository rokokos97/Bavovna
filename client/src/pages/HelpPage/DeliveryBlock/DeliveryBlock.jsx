import React from 'react';
import styles from './DeliveryBlock.module.scss';
import Dropdown from '../../../components/Dropdown/Dropdown';

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
            Please note that all delivery fees are subject to change based on
            location, order value, and any ongoing promotions or discounts. Stay
            updated on our website for the latest information regarding delivery
            costs and promotions. At BAVOVNA, we prioritize transparency and
            strive to provide you with the best shopping experience.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Nova poshta delivery to the post office'
            name='postOffice'
            inner={
              <>
                <p>
                  Experience easy and reliable delivery with Nova Poshta to the
                  post office. Convenient for those who prefer to pick up their
                  orders at their own pace.
                </p>
                <div>
                  <h4>Cost:</h4>
                  <ul className={styles.dropdownList}>
                    <li>Standard Delivery Fee: 80 UAH.</li>
                    <li>Free for orders over 1500 UAH.</li>
                  </ul>
                </div>
                <div>
                  <h4>Process:</h4>
                  <ul className={styles.dropdownList}>
                    <li>
                      During checkout, choose `Nova Poshta Delivery to the Post
                      Office`.
                    </li>
                    <li>
                      Select your preferred Nova Poshta post office location.
                    </li>
                    <li>Pay the applicable delivery fee.</li>
                    <li>
                      Receive a notification once your order is ready for
                      pickup.
                    </li>
                  </ul>
                </div>
              </>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Nova poshta delivery to the address'
            name='address'
            inner={
              <>
                <p>
                  Enjoy the luxury of having your favorite BAVOVNA items
                  delivered right to your doorstep with Nova Poshta.
                </p>
                <div>
                  <h4>Cost:</h4>
                  <ul className={styles.dropdownList}>
                    <li>Standard Delivery Fee: 80 UAH.</li>
                    <li>Free for orders over 1500 UAH.</li>
                  </ul>
                </div>
                <div>
                  <h4>Process:</h4>
                  <ul className={styles.dropdownList}>
                    <li>
                      Select `Nova Poshta Delivery to the Address` during
                      checkout.
                    </li>
                    <li>Enter your accurate delivery address.</li>
                    <li>Pay the applicable delivery fee.</li>
                    <li>
                      Track your order using the provided tracking information.
                    </li>
                  </ul>
                </div>
              </>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='International delivery'
            name='internationalDelivery'
            inner={
              <>
                <p>
                  Join the global fashion movement with our International
                  Delivery service, bringing BAVOVNA to fashion enthusiasts
                  worldwide.
                </p>
                <div>
                  <h4>Cost:</h4>
                  <ul className={styles.dropdownList}>
                    <li>International Shipping Fee: 100 UAH.</li>
                    <li>Free for international orders over 3000 UAH.</li>
                  </ul>
                </div>
                <div>
                  <h4>Process:</h4>
                  <ul className={styles.dropdownList}>
                    <li>Choose `International Delivery` at checkout.</li>
                    <li>Enter your international shipping address.</li>
                    <li>Pay the applicable international shipping fee.</li>
                    <li>
                      Track your order with the provided international tracking
                      details.
                    </li>
                  </ul>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryBlock;
