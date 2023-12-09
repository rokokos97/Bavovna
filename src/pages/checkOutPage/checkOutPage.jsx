import React from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutNavigationBlock from './blocks/checkOutNavigationBlock/checkOutNavigationBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';

const CheckOutPage = () => (
  <div className={styles.checkOutPage} data-testid="CheckOutPage">
    <CheckOutNavigationBlock />
    <CheckOutUserInfoBlock />
    <CheckOutShoppingCartBlock />
  </div>
);

export default CheckOutPage;
