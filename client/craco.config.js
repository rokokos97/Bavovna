const million = require('million');
module.exports = {
  webpack: {
    plugins: {add: [million.webpack({auto: true})]},
  },
};
