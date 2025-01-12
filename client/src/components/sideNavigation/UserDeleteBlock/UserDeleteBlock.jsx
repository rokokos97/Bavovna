import React, { useState } from 'react';
import styles from './UserDeleteBlock.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../../modal';
import { showBodyOverflow } from '../../../utils/modal.service';
import DeleteUserModal from '../../modal/modalContent/DeleteUserModal/DeleteUserModal';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../store/userSlice';
import InformModal from '../../modal/modalContent/informModal/InformModal';

const UserDeleteBlock = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirmDeleteUserModal, setShowConfirmDeleteUserModal] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const handleDeleteUser = () => {
    setShowConfirmDeleteUserModal(false);
    setShowRedirectModal(true);
    dispatch(deleteUser(id));
  };
  const closeInfoModal = () => {
    setShowRedirectModal(false);
    showBodyOverflow();
    navigate('/');
  };
  const closeModal = () => {
    setShowConfirmDeleteUserModal(false);
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
        <DeleteUserModal handleDeleteUser={handleDeleteUser} handleCloseModal={closeModal} />
      </Modal>
      <Modal isOpen={showRedirectModal} handleCloseModal={closeInfoModal}>
        <InformModal handleCloseModal={closeInfoModal} />
      </Modal>
    </div>
  );
};

export default UserDeleteBlock;
