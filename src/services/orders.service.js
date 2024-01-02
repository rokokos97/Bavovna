import httpService from './http.service';

const ordersEndpoint = '/orders/';

const categoryService = {
  get: async () => {
    const request = await httpService.get(ordersEndpoint);
    return request.data;
  },
};

export default categoryService;
