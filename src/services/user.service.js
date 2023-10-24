import httpService from './http.service';
import localStorageService from './localStorage.service';

const userEndpoint = 'user/';
const token = localStorageService.getAccessToken();

const userService = {
  get: async () => {
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
    const {data} = await httpService.get(
        userEndpoint + localStorageService.getUserId(), {
          headers: {
            Authorization: 'Barer '+token,
          },
        },
    );
    console.log(data);
    return data;
  },
  update: async (payload) => {
    const {data} = await httpService.patch(
        userEndpoint + localStorageService.getUserId(),
        payload, {
          headers: {
            Authorization: `Barer ${token}`,
          },
        },
    );
    return data;
  },
};
export default userService;
