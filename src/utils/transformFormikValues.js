function transformFormikValues(values) {
  const transformed = {};

  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const value = values[key];
      transformed[key] = typeof value === 'string' ? {label: value, value: value} : value;
    }
  }
  return transformed;
}

export default transformFormikValues;
