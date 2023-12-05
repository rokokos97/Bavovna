import httpService from './http.service';

const colorsEndpoint = '/colors/';

const colorsService = {
  get: async () => {
    const request = await httpService.get(colorsEndpoint);
    return request.data;
  },
};

export default colorsService;
