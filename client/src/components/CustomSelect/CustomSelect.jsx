import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CustomSelect.scss';

const CustomSelect = ({ options }) => {
  return <Select classNamePrefix="custom-select" options={options} />;
};

CustomSelect.propTypes = {
  options: PropTypes.array,
};

export default CustomSelect;
