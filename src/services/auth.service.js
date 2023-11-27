import axios from 'axios';
import config from '../config.json';
import sessionStorageService from './sessionStorage.service';

// Створюємо екземпляр Axios для автентифікаційних запитів
const httpAuth = axios.create({
  baseURL: config.apiEndpoint + 'auth/',
});

const authService = {
  // Реєстрація нового користувача
  register: async (payload) => {
    const {data} = await httpAuth.post(`signUp`, payload);
    return data;
  },

  // Реєстрація користувача за допомогою Google
  registerWithGoogle: async (payload) => {
    const {data} = await httpAuth.post(`signUpWithGoogle`, payload);
    return data;
  },

  // Вхід в систему за допомогою електронної пошти та пароля
  login: async ({email, password}) => {
    const {data} = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },

  // Вхід в систему за допомогою Google
  loginWithGoogle: async ({email}) => {
    const {data} = await httpAuth.post('signInWithGoogle', {
      email,
      returnSecureToken: true,
    });
    return data;
  },

  // Запит на скидання пароля
  reset: async ({email}) => {
    const {data} = await httpAuth.post('forgotPassword', {email});
    return data;
  },

  // Встановлення нового пароля
  setNewPassword: async (token, email, password) => {
    const {data} = await httpAuth.post('resetPassword', {token, email, password});
    return data;
  },
  emailVerifiy: async (token, email) => {
    console.log('authService', token, email);
    const {data} = await httpAuth.post('emailVerification', {token, email});
    return data;
  },
  // Оновлення токену автентифікації
  refresh: async () => {
    const {data} = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      // Отримання токену оновлення з локального зберігання
      refresh_token: sessionStorageService.getRefreshToken(),
    });
    return data;
  },
};

// Експорт сервісу для автентифікації
export default authService;
