import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from './newArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from './newCollectionBlock/NewCollectionBlock';
import SaleBlock from './summerSaleBlock/SaleBlock';
import BavovnaBlock from './bavovnaTextBlock/BavovnaBlock';
import NewsLettersBlock from './newsLettersBlock/NewsLettersBlock';
import BavovnaCoverImageBlock from './bavovnaCoverImageBlock/BavovnaCoverImageBlock';
import CategoriesBlock from './categoriesBlock/CategoriesBlock';
import ModalCookies from '../../components/modal/modalContent/ModalCookies/modalCookies';
import {Modal} from '../../components/modal';
import {showBodyOverflow} from '../../services/modal.service';
import Cookies from 'js-cookie';
const MainPage = () => {
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  useEffect(() => {
    const userConsent = Cookies.get('userConsent');
    if (!userConsent) {
      setShowCookiesModal(true);
    }
  }, []);
  const closeModal = () => {
    setShowCookiesModal(false);
    showBodyOverflow();
  };
  const confirmCookies = () => {
    Cookies.set('userConsent', 'true', {expires: 365});
    setShowCookiesModal(false);
    showBodyOverflow();
  };
  return (
    <>
      <div className={styles.mainPage} data-testid='MainPage'>
        <NewCollectionBlock />
        <NewArrivalsBlock />
        <SaleBlock />
        <BavovnaBlock />
        <BavovnaCoverImageBlock />
        <CategoriesBlock />
        <NewsLettersBlock />
        <Modal
          isOpen={showCookiesModal}
          handleCloseModal={closeModal}
        >
          <ModalCookies handleCloseModal={closeModal} handleConfirmModal={confirmCookies}/>
        </Modal>
      </div>
    </>
  );
};

export default MainPage;
