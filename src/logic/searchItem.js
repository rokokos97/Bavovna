export const searchItem = (things, id) => {
  if (things) {
    return things.find((thing) => thing.id === id);
  }
};
