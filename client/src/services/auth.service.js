import axios from 'axios';
import config from '../config.json';
import sessionStorageService from './sessionStorage.service';

const httpAuth = axios.create({
  baseURL: config.apiEndpoint + 'auth/',
});

const authService = {
  register: async (payload) => {
    const {data} = await httpAuth.post(`signUp`, payload);
    return data;
  },

  registerWithGoogle: async (payload) => {
    const {data} = await httpAuth.post(`signUpWithGoogle`, payload);
    return data;
  },

  login: async ({email, password}) => {
    const {data} = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },

  loginWithGoogle: async ({email}) => {
    const {data} = await httpAuth.post('signInWithGoogle', {
      email,
      returnSecureToken: true,
    });
    return data;
  },

  reset: async ({email}) => {
    const {data} = await httpAuth.post('forgotPassword', {email});
    return data;
  },

  setNewPassword: async (token, email, password) => {
    const {data} = await httpAuth.post('resetPassword', {token, email, password});
    return data;
  },
  emailVerify: async (token, email) => {
    const {data} = await httpAuth.post('emailVerification', {token, email});
    return data;
  },
  refresh: async () => {
    const {data} = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: sessionStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;
