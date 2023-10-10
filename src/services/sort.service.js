export const sortItems = (sortOrder, items) => {
  const sortedItems = [...items];
  if (sortOrder === 'lowToHigh') {
    return sortedItems.sort((a, b) => (a.price - b.price));
  }
  if (sortOrder === 'highToLow') {
    return sortedItems.sort((a, b) => (b.price - a.price));
  }
  if (sortOrder === 'best') {
    return sortedItems.filter((item) => item.status === 'sale');
  }
  return sortedItems;
};
