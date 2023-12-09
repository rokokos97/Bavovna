import React, {useState} from 'react';
import styles from './checkOutUserInfoBlock.module.scss';
import RadioButtonCheckedIcon from '../../../../components/svg/radioButtonCheckedIcon/radioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../../../../components/svg/radioButtonEmptyIcon/radioButtonEmptyIcon';
import LoginFormBlock from '../../../../components/form/formBlocks/loginFormBlock/loginFormBlock';

const CheckOutUserInfoBlock = () => {
  const [userCurrentDetails, setUserCurrentDetails] = useState('1');
  const userCurrentDetailsList = [
    {
      id: '1',
      label: 'new user',
      component: <></>,
    },
    {
      id: '2',
      label: 'registered user',
      component: (
        <>
          <LoginFormBlock />
        </>
      ),
    },
  ];
  return (
    <div className={styles.checkOutUserInfoBlock} data-testid="CheckOutUserInfoBlock">
      <p className={styles.title}>Contact details</p>
      <div className={styles.radioBlock}>
        {userCurrentDetailsList.map((detail)=> <>
          <div
            className={styles.radioWrapper}
            key={detail.id}
          >
            <button
              className={styles.radioButton}
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
        </>)}
      </div>
      {userCurrentDetailsList.map((detail)=>
            userCurrentDetails === detail.id ? detail.component:null)}
    </div>
  );
};

export default CheckOutUserInfoBlock;
