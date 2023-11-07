import httpService from './http.service';
import localStorageService from './localStorage.service';

const userEndpoint = 'user/';

const userService = {
  get: async () => {
    const token = localStorageService.getAccessToken();
    const {data} = await httpService.get(userEndpoint, {
      headers: {
        Authorization: 'Bearer '+token,
      },
    });
    return data;
  },
  create: async (payload) => {
    const {data} = await httpService.put(
        userEndpoint + payload._id,
        payload,
    );
    return data;
  },
  getCurrentUser: async () => {
    const token = localStorageService.getAccessToken();
    const {data} = await httpService.get(
        userEndpoint + localStorageService.getUserId(), {
          headers: {
            Authorization: 'Bearer '+token,
          },
        },
    );
    return data;
  },
  update: async (payload) => {
    const token = localStorageService.getAccessToken();
    const {data} = await httpService.patch(
        userEndpoint + localStorageService.getUserId(),
        payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
    );
    console.log('data', data);
    return data;
  },
};
export default userService;
