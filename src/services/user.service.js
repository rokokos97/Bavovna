import httpService from './http.service';
import sessionStorageService from './sessionStorage.service';

const userEndpoint = 'user/';

const userService = {
  get: async () => {
    const token = sessionStorageService.getAccessToken();
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
    const token = sessionStorageService.getAccessToken();
    const {data} = await httpService.get(
        userEndpoint + sessionStorageService.getUserId(), {
          headers: {
            Authorization: 'Bearer '+token,
          },
        },
    );
    return data;
  },
  update: async (payload) => {
    const token = sessionStorageService.getAccessToken();
    const {data} = await httpService.patch(
        userEndpoint + sessionStorageService.getUserId(),
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
