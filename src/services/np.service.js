import httpService from './http.service';
const npEndpoint = '/novaPoshta';
const npService = {
  get: async ()=> {
    try {
      const request = await httpService.get(npEndpoint);
      return request.data;
    } catch (error) {
      console.error('Error fetching np data from server', error);
      throw error;
    }
  },
  post: async (payload)=> {
    console.log('payload', payload);
    try {
      const request = await httpService.post(npEndpoint, payload);
      return request.data;
    } catch (error) {
      console.error('Error fetching np data from server', error);
      throw error;
    }
  },
};

export default npService;
