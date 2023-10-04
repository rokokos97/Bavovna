const docBody = document.getElementsByTagName('body')[0];

export const showBodyOverflow = () => {
  docBody.style.overflowY = null;
};

export const hideBodyOverflow = () => {
  docBody.style.overflowY = 'hidden';
};
