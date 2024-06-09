import axios from 'axios';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const http = axios.create({
  baseURL: apiEndpoint,
});

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};
export default httpService;
