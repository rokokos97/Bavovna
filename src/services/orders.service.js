import httpService from './http.service';

const ordersEndpoint = '/orders/';

const categoryService = {
  get: async () => {
    const request = await httpService.get(ordersEndpoint);
    return request.data;
  },
  add: async (payload) => {
    console.log('payload', payload);
    const request = await httpService.post(ordersEndpoint, payload);
    return request.data;
  },
};

export default categoryService;
