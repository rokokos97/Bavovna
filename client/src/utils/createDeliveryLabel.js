const createDeliveryLabel = (object) => {
  let label = '';
  Object.keys(object).forEach((key) => {
    if (key === 'city') {
      label += `${object[key].label}`;
    }
    if (key === 'warehouse') {
      label += `, ${object[key].label}`;
    }
    if (key === 'street') {
      label += `, str.${object[key]}`;
    }
    if (key === 'houseNumber') {
      label += ` ${object[key]}`;
    }
    if (key === 'flatNumber') {
      label += `, apt.${object[key]}`;
    }
    if (key === 'intDeliveryAddress') {
      label += `${object[key]}`;
    }
  });
  return label;
};

export default createDeliveryLabel;
