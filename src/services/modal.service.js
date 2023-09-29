const docBody = document.getElementsByTagName('body')[0];

export const showBodyOverflow = () => {
  docBody.style.overflow = null;
  docBody.style.position = null;
};

export const hideBodyOverflow = () => {
  docBody.style.overflow = 'hidden';
  docBody.style.position = 'fixed';
};
