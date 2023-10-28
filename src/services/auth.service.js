import axios from 'axios';
import localStorageService from './localStorage.service';
import config from '../config.json';


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
    console.log(email);
    const {data} = await httpAuth.post('forgotPassword', {email});
    console.log(data);
    return data;
  },
  setNewPassword: async (token, email, password) => {
    console.log(token, email, password);
    const {data} = await httpAuth.post('resetPassword', {token, email, password});
    console.log(data);
    return data;
  },
  refresh: async () => {
    const {data} = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};
export default authService;
