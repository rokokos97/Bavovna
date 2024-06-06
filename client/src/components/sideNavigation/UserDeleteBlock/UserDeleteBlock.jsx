import React, {useState} from 'react';
import styles from './UserDeleteBlock.module.scss';
import {useParams} from 'react-router-dom';
import {Modal} from '../../modal';
import {showBodyOverflow} from '../../../utils/modal.service';
import DeleteUserModal from '../../modal/modalContent/DeleteUserModal/DeleteUserModal';


const UserDeleteBlock = () => {
  const [showConfirmDeleteUserModal, setShowConfirmDeleteUserModal] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const {id} = useParams();
  const handleDeleteUser = () => {
    console.log('delete user');
    console.log(id);
  };
  const closeModal = () => {
    setShowConfirmDeleteUserModal(false);
    setShowRedirectModal(false);
    showBodyOverflow();
  };
  return (
    <div className={styles.userDeleteBlock} data-testid="UserDeleteBlock">
      <button
        className={styles.userDeleteBlock__button}
        onClick={() => setShowConfirmDeleteUserModal(true)}
      >
        <span>delete account</span>
      </button>
      <Modal isOpen={showConfirmDeleteUserModal} handleCloseModal={closeModal}>
        <DeleteUserModal
          handleDeleteUser={handleDeleteUser}
          handleCloseModal={closeModal}
        />
      </Modal>
      <Modal isOpen={showRedirectModal} handleCloseModal={closeModal}>
      </Modal>
    </div>
  );
};

export default UserDeleteBlock;
