const colorsMock = require('../mock/colors.json');
const Colors = require('../models/Colors');
const itemsMock = require('../mock/items.json');
const Items = require('../models/Item');
const categoriesMock = require('../mock/categories.json');
const Categories = require('../models/Category');


module.exports = async () => {
  const colors = await Colors.find();
  if (colors.length !== colorsMock.length) {
    await createInitialEntity(Colors, colorsMock);
  }
  const categories = await Categories.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Categories, categoriesMock);
  }
  const items = await Items.find();
  if (items.length !== itemsMock.length) {
    await createInitialEntity(Items, itemsMock);
  }
};
async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
      data.map(async (item) => {
        try {
          delete item._id;
          const newItem = new Model(item);
          await newItem.save();
          return newItem;
        } catch (e) {
          return e.message;
        }
      }),
  );
}
