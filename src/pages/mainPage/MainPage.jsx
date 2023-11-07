import React, {useState} from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from '../../blocks/NewArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from '../../blocks/NewCollectionBlock/NewCollectionBlock';
import SaleBlock from '../../blocks/SaleBlock/SaleBlock';
import BavovnaBlock from '../../blocks/BavovnaBlock/BavovnaBlock';
import NewsLettersBlock from '../../blocks/NewsLettersBlock/NewsLettersBlock';
import BavovnaCoverImageBlock from '../../blocks/BavovnaCoverImageBlock/BavovnaCoverImageBlock';
import CategoriesBlock from '../../blocks/CategoriesBlock/CategoriesBlock';
import ModalCookies from '../../components/modal/modalContent/ModalCookies/modalCookies';
import {Modal} from '../../components/modal';
import {showBodyOverflow} from '../../services/modal.service';

const MainPage = () => {
  const [showCookiesModal, setShowCookiesModal] = useState(true);
  const closeModal = () => {
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
          <ModalCookies handleCloseModal={closeModal}/>
        </Modal>
      </div>
    </>
  );
};

export default MainPage;
