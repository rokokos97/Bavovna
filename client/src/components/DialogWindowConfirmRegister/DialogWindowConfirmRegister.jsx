import React from 'react';
import styles from './dialogWindowConfirmRegister.module.scss';
import PropTypes from 'prop-types';
import ExitIcon from 'client/src/components/svg/exitIcon/exitIcon';


const DialogWindowConfirmRegister = ({
  message, onClose, onConfirm}) => {
  return (
    <div className={styles.dialogWindowConfirmRegister} data-testid="DialogWindowConfirmRegister">
      <div>
        <ExitIcon
          onClick={onClose}
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
