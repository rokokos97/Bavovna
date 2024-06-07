import httpService from './http.service';

const newsletterEndpoint = '/newsletter/';

const newsletterService = {
  add: async (payload) => {
    const request = await httpService.post(newsletterEndpoint, payload);
    return request.data;
  },
  unsubscribe: async (payload) => {
    console.log('payload', payload);
    const request = await httpService.post(newsletterEndpoint + 'unsubscribe/', payload);
    return request.data;
  },
};

export default newsletterService;
