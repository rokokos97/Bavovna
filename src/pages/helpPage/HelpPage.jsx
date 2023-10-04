import React, {useState} from 'react';
import styles from './HelpPage.module.scss';
import AsideHelpBlock from '../../blocks/AsideHelpBlock/AsideHelpBlock';

const HelpPage = () => {
  const [selectedHelp, setSelectedHelp] = useState(0);
  console.log(selectedHelp);

  const handleHelpSelect = (index) => {
    setSelectedHelp(index);
  };

  return (
    <div className={styles.helpPage}>
      <AsideHelpBlock
        selectedHelp={selectedHelp}
        handleHelpSelect={handleHelpSelect}
      />
    </div>
  );
};

export default HelpPage;
