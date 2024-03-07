const transferDataToSessionStorage = () => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      sessionStorage.setItem(key, value);
    }
  });
};

export default transferDataToSessionStorage;
