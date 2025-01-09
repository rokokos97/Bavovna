// import axios from 'axios';
//
// const API_KEY = process.env.REACT_APP_CURRENCYLAYER_API_KEY;
// const BASE_URL = process.env.REACT_APP_CURRENCYLAYER_API_ENDPOINT;
//
// console.log(API_KEY);
// console.log(BASE_URL);
//
// export const getExchangeRate = async (from, to) => {
//  try {
//    const response = await axios.get(`${BASE_URL}live`,
//        {
//          params: {
//            access_key: API_KEY,
//            currencies: `${from},${to}`,
//            source: 1,
//          },
//        });
//    const rates = response.data.quotes;
//    const usdToFrom = rates[`USD${from}`];
//    const usdToTo = rates[`USD${to}`];
//
//    if (!usdToFrom || !usdToTo) {
//      throw new Error('The rate is not available');
//    }
//    return usdToTo / usdToFrom;
//  } catch (error) {
//    console.error('Get currency error:', error);
//  }
// };

export const convertPrice = (priceInUAH, exchangeRate) => {
  return (priceInUAH / exchangeRate).toFixed(2);
};
