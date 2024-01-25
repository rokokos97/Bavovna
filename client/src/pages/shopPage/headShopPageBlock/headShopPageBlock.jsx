import React, {useState} from 'react';
import styles from './headShopPageBlock.module.scss';
import {useDataShopPage} from '../../../Providers/ShopPageMasterProvider';

const HeadCatalogBlock = () => {
  const {setStatusKey} = useDataShopPage();
  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleOnClick = () => {
    setIsActiveButton(true);
    setStatusKey('sale_10%');
  };

  return (
    <div className={styles.head} data-testid='HeadCatalogBlock'>
      {isActiveButton ? (
        <div className={styles.heroActive}>
          <h2 className={styles.heroTitle}>
            10% discount on the summer collection
          </h2>
          <p className={styles.heroText}>
            Lorem ipsum dolor sit amet consectetur. Nec nam at volutpat ut eget
            ut morbi et. Est faucibus at mollis sit facilisi. Urna nullam
            vulputate in rhoncus. Non purus nisl massa consequat etiam
            vestibulum eu. Fringilla non scelerisque curabitur ut nulla posuere
            aenean. Non nam egestas at ut tempus nascetur magna. Eget orci
            sapien cursus eu urna lacus vel.
          </p>
        </div>
      ) : (
        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>
            10% discount on the summer collection
          </h2>
          <button className={styles.heroBtn} onClick={handleOnClick}>
            <span>View more</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadCatalogBlock;
