import React from 'react';
import styles from './dialogWindowConfirmRegister.module.scss';
import XIcon from '../svg/xIcon/xIcon';
import PropTypes from 'prop-types';


const DialogWindowConfirmRegister = ({
  message, onClose, onConfirm}) => {
  return (
    <div className={styles.dialogWindowConfirmRegister} data-testid="DialogWindowConfirmRegister">
      <div>
        <XIcon
          role='button'
        />
        <p>{message}</p>
        <button
          onClick={onConfirm}
        >
          <span>
            Go to mail
          </span>
        </button>
      </div>
    </div>
  );
};

DialogWindowConfirmRegister.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
export default DialogWindowConfirmRegister;
