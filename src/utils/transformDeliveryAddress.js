function collectLabels(values) {
  const keys = Object.keys(values);
  const labels = keys.map((key) => {
    const item = values[key];
    console.log('item', item);

    let label;
    if (key === 'street' && item.label) {
      label = `str. ${item.label}`;
    } else if (key === 'houseNumber' && item.label) {
      label = `№${item.label}`;
    } else if (key === 'flatNumber' && item.label) {
      label = `apt. ${item.label}`;
    } else {
      label = item.label || item;
    }

    return label;
  });
  return labels.join(', ');
}
export default collectLabels;
