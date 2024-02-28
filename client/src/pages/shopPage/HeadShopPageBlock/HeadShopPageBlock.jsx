import React, {useContext} from 'react';
import styles from './HeadShopPageBlock.module.scss';
import {useDataShopPage} from '../../../providers/ShopPageMasterProvider';
import {useNavigate} from 'react-router-dom';
import {SearchContext} from '../../../App/App';

const HeadCatalogBlock = () => {
  const navigate = useNavigate();
  const {setSearchValue} = useContext(SearchContext );
  const {isDiscountVisible, setIsDiscountVisible} = useDataShopPage();

  const handleOnDiscountBtnClick = () => {
    setIsDiscountVisible(true);
    setSearchValue('');
    navigate('.?status=sale_10%');
  };

  return (
    <div>
      {isDiscountVisible ? (
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
          <button className={styles.heroBtn} type='button' aria-label='go to 10%-discount page' onClick={handleOnDiscountBtnClick}>
            <span>View more</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadCatalogBlock;
