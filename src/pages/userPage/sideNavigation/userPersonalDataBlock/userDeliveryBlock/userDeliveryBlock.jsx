import React from 'react';
import styles from './userDeliveryBlock.module.scss';
import UserDeliveryAddressList from './userDeliveryAddressList/userDeliveryAddressList';
import UserDeliveryAddressForm from './userDeliveryAddressForm/userDeliveryAddressForm';

const UserDeliveryBlock = () => {
  return (
    <div className={styles.userDeliveryBlock} data-testid="UserDeliveryBlock">
      <p
        className={styles.deliveryTitle}
      >
        delivery
      </p>
      <section>
        <div>
          <UserDeliveryAddressForm/>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.blockLabel}>
            Saved delivery method
          </p>
          <div>
            <UserDeliveryAddressList hiddenButton={false}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDeliveryBlock;
