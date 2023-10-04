import React from 'react';
import styles from './ProposeBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const ProposeBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.proposeBlock}>
      <div className={styles.img}>
        <img src='./img/images/AboutUs/propose_1.jpg' alt='img_3' />
      </div>
      <div className={`${styles.img} ${styles.lastChild}`}>
        <img src='./img/images/AboutUs/propose_2.jpg' alt='img_4' />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>
          <span>What&#x20;</span>
          we propose
        </h2>
        <div className={styles.innerText}>
          <p className={styles.text}>
            In the BAVOVNA collection, you can find many models of various
            styles and cuts - from casual T-shirts and jeans to elegant dresses
            and blouses. Each product is manufactured using advanced
            technologies and with great attention to detail. BAVOVNA clothes are
            high-quality, durable, and comfortable to wear.
          </p>
          <p className={styles.text}>
            By choosing BAVOVNA clothes, you take care of your health and the
            environment and emphasize your style and elegance.
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => navigate('/catalogue')}
        >
          <span>View new</span>
        </button>
      </div>
    </div>
  );
};

export default ProposeBlock;
