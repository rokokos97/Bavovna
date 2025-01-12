const express = require('express');
// const {initNovaPoshta} = require('novaposhtajs');
// const config = require('../config/default.json');
// const novaPoshta = initNovaPoshta(config.novaPochta.apiKey);
// eslint-disable-next-line new-cap
const router = express.Router({ mergeParams: true });
const warehousesList = require('../mock/novaPoshtaWarehouses.json');
const citiesList = require('../mock/novaPoshtaCities.json');
router.get('/', async (req, res) => {
  try {
    //    const data = await novaPoshta.address.getCities();
    //    const cities = [];
    //    data.forEach((item) => {
    //      cities.push({label: item.description, value: item.ref});
    //    });
    return res.status(200).send(citiesList);
  } catch (error) {
    return res.status(500).json({
      response: {
        errors: error,
        code: 500,
        message: 'SERVER_ERROR',
      },
    });
  }
});
router.post('/', async (req, res) => {
  try {
    const { cityRef } = req.body;
    //    const data = await novaPoshta.address.getWarehouses({
    //      cityRef: cityRef,
    //      page: 1,
    //      limit: 50,
    //    });
    //    const warehousesList = [];
    //    data.forEach((item) => {
    //      warehousesList.push({label: item.description, value: item.ref});
    //    });

    return res.status(200).send(warehousesList[cityRef]);
  } catch (error) {
    return res.status(500).json({
      response: {
        errors: error,
        code: 500,
        message: 'SERVER_ERROR',
      },
    });
  }
});
module.exports = router;
