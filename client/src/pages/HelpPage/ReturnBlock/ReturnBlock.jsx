import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import styles from './ReturnBlock.module.scss';

const ReturnBlock = () => {
  return (
    <div className={styles.returnBlock}>
      <h2 className={styles.helpTitle}>Return information</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire practical skills. The site
        does not have a commercial basis and none of the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Details</h3>
          <p className={styles.detailsParagraph}>
            At BAVOVNA, we value your satisfaction and strive to provide you with high-quality
            products. If, for any reason, you are not completely satisfied with your purchase, our
            hassle-free return policy ensures a smooth and convenient process for returns.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Good quality product"
            name="Good"
            inner={
              <p>
                If the product is returned due to a change of mind or any reason other than poor
                quality, a return can be initiated within 30 days from the date of delivery.
              </p>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Poor quality product"
            name="Poor"
            inner={
              <p>
                In the rare case of receiving a defective or poor-quality product, please contact
                our customer service team immediately for prompt assistance.
              </p>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Return procedure"
            name="Return_procedure"
            inner={
              <div className={styles.detailsParagraph}>
                <p>Initiating a Return:</p>
                <ol className={styles.detailsNumberedList}>
                  <li>Log in to your BAVOVNA account on our website.</li>
                  <li>Navigate to the `Order History` section.</li>
                  <li>Select the order containing the item you wish to return.</li>
                  <li>Follow the instructions to initiate the return process.</li>
                </ol>
                <p>Contacting Customer Service:</p>
                <p>
                  If you encounter any issues or require assistance, our customer service team is
                  ready to help. Reach out to us via e-mail: help@bavovna.space with your order
                  details and reason for return.
                </p>
              </div>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Return methods"
            name="Return_methods"
            inner={
              <div className={styles.detailsParagraph}>
                <p>Postal Return:</p>
                <ul className={styles.detailsList}>
                  <li>Pack the item securely in its original packaging.</li>
                  <li>Attach the return label provided during the online return process.</li>
                  <li>Drop off the package at your nearest postal service.</li>
                </ul>
                <p>In-Store Return:</p>
                <p>
                  For local customers, returns can be made in person at our physical store
                  locations. Please bring your order confirmation and the item in its original
                  condition.
                </p>
              </div>
            }
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Refunds</h3>
          <p className={styles.detailsParagraph}>
            Refunds will be processed within 30 days of receiving the returned item. The refund will
            be issued to the original payment method used during the purchase.
          </p>
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Term of payment of funds</h3>
          <p className={styles.detailsParagraph}>
            The refund amount will be reflected in your account within 30 business days, depending
            on your card issuer`s policies. Refunds for online payment methods will be processed
            within 14 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnBlock;
