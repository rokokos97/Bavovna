const TOKEN_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const USERID_KEY = 'user-local-id';

export function setTokens({refreshToken, accessToken, userId, expiresIn = 3600}) {
  const expireDate = String(new Date().getTime() + expiresIn * 1000);
  sessionStorage.setItem(USERID_KEY, userId);
  sessionStorage.setItem(TOKEN_KEY, accessToken);
  sessionStorage.setItem(REFRESH_KEY, refreshToken);
  sessionStorage.setItem(EXPIRES_KEY, expireDate);
}
export function getAccessToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
  return sessionStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
  sessionStorage.removeItem(USERID_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_KEY);
  sessionStorage.removeItem(EXPIRES_KEY);
}
export function setCurrentCart(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}
export function getCurrentCart() {
  return JSON.parse(sessionStorage.getItem('cart'));
}
export function getTokenExpiresDate() {
  return sessionStorage.getItem(EXPIRES_KEY);
}
export function getUserId() {
  return sessionStorage.getItem(USERID_KEY);
}
const sessionStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  removeAuthData,
  setCurrentCart,
  getCurrentCart,
};
export default sessionStorageService;
