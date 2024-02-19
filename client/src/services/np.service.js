import httpService from './http.service';
const npEndpoint = '/novaPoshta';
const npService = {
  get: async ()=> {
    try {
      const request = await httpService.get(npEndpoint);
      return request.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (payload)=> {
    try {
      const request = await httpService.post(npEndpoint, payload);
      return request.data;
    } catch (error) {
      throw error;
    }
  },
};

export default npService;
