import httpService from './http.service';

const newsletterEndpoint = '/newsletter/';

const newsletterService = {
  add: async (payload) => {
    console.log('payload', payload);
    const request = await httpService.post(newsletterEndpoint, payload);
    console.log('request', request);
    return request.data;
  },
};

export default newsletterService;
