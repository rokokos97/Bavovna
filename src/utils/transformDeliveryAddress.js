function collectLabels(values) {
  const keys = Object.keys(values);
  console.log('keys', keys);
  const labels = keys.map((key) => {
    const item = values[key];
    console.log('item', item);
    return item.label? item.label : item;
  });
  return labels.join(', ');
}
export default collectLabels;
