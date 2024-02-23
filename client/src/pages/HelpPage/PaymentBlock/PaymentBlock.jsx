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
            At BAVOVNA, we offer a variety of secure and convenient payment
            methods to enhance your shopping experience. Choose the option that
            suits you best to complete your purchase seamlessly.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Bank card'
            name='bank'
            inner={
              <ul className={styles.detailsList}>
                <li>
                  Utilize cashback options provided by your credit card to enjoy
                  additional savings on your BAVOVNA purchase.
                </li>
                <li>
                  Redeem your accumulated loyalty points or bonuses during the
                  checkout process for discounts on your current order.
                </li>
                <li>
                  Apply promo codes provided through our promotions,
                  newsletters, or special events to enjoy exclusive discounts on
                  your selected items.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Cashback, bonuses, promo codes'
            name='cashback'
            inner={
              <ul className={styles.detailsList}>
                <li>
                  For added flexibility, we offer the option to pay with cash
                  upon receiving your order. Please have the exact amount ready
                  for the courier.
                </li>
                <li>
                  Opt for the convenience of paying with your bank card upon
                  delivery. Our couriers are equipped with secure mobile payment
                  terminals.
                </li>
                <li>
                  Apply promo codes provided through our promotions,
                  newsletters, or special events to enjoy exclusive discounts on
                  your selected items.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Payment upon receipt</h3>
          <p className={styles.detailsParagraph}>
            For payments upon placing an order, the total amount will be
            deducted from your chosen payment method at the time of purchase.
            For payments upon receipt, please ensure that you have the exact
            amount in cash or a valid bank card ready when the courier delivers
            your package.
          </p>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Cash'
            name='cash'
            inner='For added flexibility, we offer the option to pay with cash
                  upon receiving your order. Please have the exact amount ready
                  for the courier. Cashback, bonuses, and promo codes are subject to terms and conditions.
                   Please check the specific details associated with each promotion'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Bank card'
            name='card'
            inner='Opt for the convenience of paying with your bank card upon
                  delivery. Our couriers are equipped with secure mobile payment
                  terminals.  Bank card transactions are processed through secure and encrypted channels to safeguard your financial information.'
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id='dropdownLeftBtn'
            placeholder='Important notes'
            name='notes'
            inner={
              <ul className={styles.detailsList}>
                <li>
                  For payments upon placing an order, the total amount will be deducted from your chosen payment method at the time of purchase.
                </li>
                <li>
                  For payments upon receipt, please ensure that you have the exact amount in cash or
                   a valid bank card ready when the courier delivers your package.
                </li>
                <li>
                  Bank card transactions are processed through secure and encrypted channels to safeguard your financial information.
                </li>
                <li>
                  Cashback, bonuses, and promo codes are subject to terms and conditions.
                   Please check the specific details associated with each promotion.
                </li>
                <li>
                  In case of any payment-related queries or issues, feel free to reach out to our customer service team for prompt assistance.
                  At BAVOVNA, we prioritize transparency and convenience in every aspect of your shopping journey.
                  Enjoy a secure and rewarding payment experience with us.
                  Bank card transactions are processed through secure and encrypted channels to safeguard your financial information.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </>
  );
};

export default PaymentBlock;
