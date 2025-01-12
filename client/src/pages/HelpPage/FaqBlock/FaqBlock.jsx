import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import styles from './FaqBlock.module.scss';

const FaqBlock = () => {
  return (
    <div className={styles.faqBlock}>
      <h2 className={styles.helpTitle}>FAQ</h2>
      <p className={styles.helpParagraph}>
        This site was created solely as part of training and to acquire practical skills. The site
        does not have a commercial basis and none of the products are for sale.
      </p>
      <div className={styles.description}>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Products</h3>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Table of sizes"
            name="sizes"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: How can I find the right size for my BAVOVNA clothing?</li>
                <li>
                  A: To ensure the perfect fit, please refer to our detailed Size Guide available on
                  each product page. This guide provides measurements and recommendations to help
                  you choose the most suitable size for your body type.
                </li>
                <li>Q: Do you offer plus sizes or extended sizing?</li>
                <li>
                  A: Yes, we strive to be inclusive. Depending on the product, we offer a range of
                  sizes to cater to various body shapes. Please check the Size Guide on the specific
                  product page for detailed information.
                </li>
                <li>Q: What if I`m between sizes?</li>
                <li>
                  A: If you find yourself between sizes, we recommend sizing up for a more
                  comfortable fit. Additionally, feel free to reach out to our customer service for
                  personalized sizing advice.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Availability of goods"
            name="availability"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: How can I check the availability of a specific item?</li>
                <li>
                  A: The availability of each item is displayed on its respective product page. If
                  an item is out of stock, you can use the `Notify Me` feature to receive an email
                  when it`s back in stock.
                </li>
                <li>Q: Are your products restocked regularly?</li>
                <li>
                  A: Yes, we regularly update our inventory to provide you with the latest styles.
                  Keep an eye on our website for restocks, or sign up for our newsletter to stay
                  informed about new arrivals and restocked items.
                </li>
                <li>Q: Can I pre-order items that are currently out of stock?</li>
                <li>
                  A: Unfortunately, we do not currently offer pre-orders for out-of-stock items. We
                  recommend checking back regularly for updates on product availability.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Pricing policy"
            name="policy"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: How are your prices determined?</li>
                <li>
                  A: Our pricing reflects the quality of our products, design efforts, and the use
                  of premium materials. We aim to offer competitive prices while maintaining the
                  highest standards in fashion and customer satisfaction.
                </li>
                <li>Q: Do you offer any discounts or promotions?</li>
                <li>
                  A: Yes, we periodically run promotions, sales, and offer exclusive discounts. Stay
                  tuned to our website, subscribe to our newsletter, and follow us on social media
                  to be the first to know about any ongoing discounts or special offers.
                </li>
                <li>Q: Can I use multiple discount codes on a single order?</li>
                <li>
                  A: Generally, only one discount code can be applied per order. During checkout,
                  please enter the most advantageous code for your purchase.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Order</h3>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Availability of goods"
            name="availability"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: How can I check if a product is currently in stock?</li>
                <li>
                  A: The availability of each item is indicated on its respective product page. If
                  an item is out of stock, you can use the `Notify Me` feature to receive an email
                  notification when it becomes available again.
                </li>
                <li>Q: Do you restock items that are currently sold out?</li>
                <li>
                  A: Yes, we regularly restock our popular items. Keep an eye on our website,
                  subscribe to our newsletter, or follow us on social media to stay informed about
                  restocked products.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="What happens after placing an order?"
            name="happens"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: What is the order processing time?</li>
                <li>
                  A: Orders are typically processed within 2 business days. Once your order is
                  processed, you will receive a confirmation email with details about your purchase.
                </li>
                <li>Q: Can I modify my order after it`s been placed?</li>
                <li>
                  A: Unfortunately, we are unable to modify orders once they have been confirmed.
                  Please double-check your order before completing the checkout process.
                </li>
                <li>Q: Do you offer gift wrapping or personalized messages?</li>
                <li>
                  A: At the moment, we do not offer gift wrapping services. However, stay tuned for
                  any updates or changes to our services in the future.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Order tracking"
            name="tracking"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: How can I track my order?</li>
                <li>
                  A: Once your order is shipped, you will receive a shipping confirmation email with
                  a tracking number and a link to track your package. You can also log in to your
                  BAVOVNA account to monitor the status of your order.
                </li>
                <li>Q: How soon can I expect my order to arrive?</li>
                <li>
                  A: The estimated delivery time will be provided during the checkout process.
                  Actual delivery times may vary based on your location and the shipping method
                  chosen.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Order cancellation"
            name="cancellation"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: Can I cancel my order after placing it?</li>
                <li>
                  A: Order cancellations are only possible within a short period after the order is
                  placed. Please contact our customer service team immediately for assistance. Once
                  the order has been processed, it cannot be canceled.
                </li>
                <li>Q: What if I receive a damaged or incorrect item?</li>
                <li>
                  A: We apologize for any inconvenience. Please contact our customer service team
                  within 7 days of receiving the item, and we will assist you in resolving the issue
                  through a replacement or refund. If you have any other questions or concerns not
                  addressed in this FAQ, feel free to reach out to our customer service team. We are
                  here to help!
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsBlock}>
          <h3 className={styles.detailsTitle}>Technical problems</h3>
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Login and account issues"
            name="login_issues"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: I can`t log in to my account. What should I do?</li>
                <li>
                  A: If you are experiencing login issues, please ensure that you are using the
                  correct email address and password. If the problem persists, use the `Forgot
                  Password` option to reset your password. If the issue persists, contact our
                  customer support for further assistance.
                </li>
                <li>Q: Why can`t I create an account?</li>
                <li>
                  A: Check that you have filled in all the required fields correctly during the
                  account creation process. If the issue persists, please contact our customer
                  support for assistance.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Website and browsing issues"
            name="website_issues"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: I`m having trouble navigating the website. What can I do?</li>
                <li>
                  A: Clear your browser cache and cookies, or try accessing the website from a
                  different browser. If the problem persists, please contact our customer support
                  for assistance.
                </li>
                <li>Q: Why are some images not loading on the website?</li>
                <li>
                  A: This issue may be related to your internet connection or browser settings. Try
                  refreshing the page, clearing your browser cache, or accessing the website from a
                  different browser.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Payment and checkout issues"
            name="payment_issues"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: I`m having trouble completing my payment. What should I do?</li>
                <li>
                  A: Double-check that all payment information is entered correctly. If the problem
                  persists, try using a different payment method or contact your bank for
                  assistance. For further help, please contact our customer support.
                </li>
                <li>Q: The website is not accepting my promo code. What can I do?</li>
                <li>
                  A: Ensure that the promo code is entered correctly, and check for any expiration
                  dates or usage restrictions. If the problem persists, contact our customer support
                  for assistance.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsDropdown}>
          <Dropdown
            id="dropdownLeftBtn"
            placeholder="Order and shipping issues"
            name="order_issues"
            inner={
              <ul className={styles.detailsList}>
                <li>Q: I didn`t receive an order confirmation email. What should I do?</li>
                <li>
                  A: Check your spam or junk folder. If the confirmation email is not found, log in
                  to your account to view your order status. If you still encounter issues, contact
                  our customer support for assistance.
                </li>
                <li>Q: I`m having trouble tracking my order. What can I do?</li>
                <li>
                  A: Check the shipping confirmation email for the tracking number and use the
                  provided link to track your order. If the issue persists, contact our customer
                  support for assistance.
                </li>
              </ul>
            }
          />
        </div>
        <div className={styles.detailsBlock}>
          <p className={styles.detailsParagraph}>
            If you encounter technical problems that are not addressed in this FAQ, please reach out
            to our customer support team, providing as much detail as possible about the issue. We
            are committed to resolving any technical difficulties you may experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;
