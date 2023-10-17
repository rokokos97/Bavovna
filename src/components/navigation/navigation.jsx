import React, {useState} from 'react';
import styles from './navigation.module.scss';
import PropTypes from 'prop-types';

const Navigation = ({sections}) => {
  const [activeSection, setActiveSection] = useState(sections[0].label);
  return (
    <div className={styles.navigation} data-testid="Navigation">
      <div className={styles.sidebar}>
        <p>my account</p>
        {sections.map((section) => (
          <div
            key={section.label}
            className={activeSection === section.label ? styles.active : ''}
            onClick={() => setActiveSection(section.label)}
          >
            {section.label}
          </div>
        ))}
      </div>
      <div className={styles.navigationContentSide}>
        {sections.find((section) => section.label === activeSection).content}
      </div>
    </div>
  );
};
Navigation.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default Navigation;
