import React from 'react';
import styles from './userDeliveryBlock.module.scss';
import UserDeliveryAddressList from './userDeliveryAddressList/userDeliveryAddressList';
import ListWithRadioButtons from '../../../../../components/listWithRadioButtons/listWithRadioButtons';
import deliveryMethodsList from '../../../../../utils/deliveryMethodsList';
const UserDeliveryBlock = () => {
  return (
    <div className={styles.userDeliveryBlock} data-testid="UserDeliveryBlock">
      <p
        className={styles.deliveryTitle}
      >
        delivery
      </p>
      <section className={styles.section}>
        <div className={styles.column}>
          <p className={styles.blockLabel}>
              Add new delivery method
          </p>
          <ListWithRadioButtons options={
            deliveryMethodsList[1]
          } isList={false} deleteButton={true}/>
        </div>
        <div className={styles.column}>
          <p className={styles.blockLabel}>
            Saved delivery method
          </p>
          <UserDeliveryAddressList hiddenButton={false}/>
        </div>
      </section>
    </div>
  );
};

export default UserDeliveryBlock;
