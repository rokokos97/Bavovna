import httpService from './http.service';

const itemEndpoint = '/item/';

const itemService = {
  get: async () => {
    const request = await httpService.get(itemEndpoint);
    return request.data;
  },
};

export default itemService;
