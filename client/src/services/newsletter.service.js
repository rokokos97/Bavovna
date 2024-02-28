import httpService from './http.service';

const newsletterEndpoint = '/newsletter/';

const newsletterService = {
  add: async (payload) => {
    const request = await httpService.post(newsletterEndpoint, payload);
    return request.data;
  },
};

export default newsletterService;
