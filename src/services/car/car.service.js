const { CarModel } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return CarModel.find(filter)
  },
  findOneByParams: async (filter = {}) => {
    return CarModel.findOne(filter)
  },
  updateCar: async (carsId, newInfo) => {
    return CarModel.findByIdAndUpdate(carsId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return CarModel.create(newInfo)
  },
  deleteOne: async (carId) => {
    return CarModel.deleteOne({ _id: carId });
  }
}
