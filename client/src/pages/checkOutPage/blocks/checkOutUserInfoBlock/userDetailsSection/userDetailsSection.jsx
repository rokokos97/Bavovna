import React from 'react';
import styles from './userDetailsSection.module.scss';
import RadioButtonCheckedIcon from '../../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../../../../../store/userSlice';

const UserDetailsSection = ({userCurrentDetailsList, userCurrentDetails, setUserCurrentDetails}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={styles.userDetailsSection} data-testid="UserDetailsSection">
      <div className={styles.radioBlock}>
        {userCurrentDetailsList.map((detail, index)=> <div key={index}>
          <div
            className={styles.radioWrapper}
          >
            <button
              className={styles.radioButton}
              type='button'
              disabled={isLoggedIn}
              onClick = {()=> setUserCurrentDetails(detail.id) }
            >
              {userCurrentDetails === detail.id ? <RadioButtonCheckedIcon/>:<RadioButtonEmptyIcon/>}
            </button>
            <label
              className={styles.label}
            >
              {detail.label}
            </label>
          </div>
        </div>)}
      </div>
      {userCurrentDetails === '2' && userCurrentDetailsList[1].value}
      {/* {userCurrentDetailsList.map((detail)=> userCurrentDetails === detail.id ? <div key={detail.id}>{detail.value}</div>: null)}*/}
    </div>
  );
};
UserDetailsSection.propTypes = {
  userCurrentDetailsList: PropTypes.array.isRequired,
  setUserCurrentDetails: PropTypes.func.isRequired,
  userCurrentDetails: PropTypes.string.isRequired,
};

export default UserDetailsSection;
