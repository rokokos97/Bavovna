import React, {useState} from 'react';
import AsideHelpBlock from '../../blocks/AsideHelpBlock/AsideHelpBlock';
import {helps} from '../../services/helps.service';
import styles from './HelpPage.module.scss';

const HelpPage = () => {
  const [selectedHelpId, setSelectedHelpId] = useState(0);
  console.log(selectedHelpId);

  const handleHelpSelect = (id) => {
    setSelectedHelpId(id);
  };

  const currentDescription = helps.find(
      (help) => help.id === selectedHelpId,
  ).description;

  return (
    <div className={styles.helpPage}>
      <div className={styles.helpAside}>
        <AsideHelpBlock
          helps={helps}
          selectedHelpId={selectedHelpId}
          handleHelpSelect={handleHelpSelect}
        />
      </div>
      <div className={styles.helpDescription}>
        {currentDescription}
      </div>
    </div>
  );
};

export default HelpPage;
