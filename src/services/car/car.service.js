const { Car } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return Car.find(filter)
  },
  findOneByParams: async (filter = {}) => {
    return Car.findOne(filter)
  },
  updateCar: async (carsId, newInfo) => {
    return Car.findByIdAndUpdate(carsId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return Car.create(newInfo)
  },
  deleteOne: async (userId) => {
    return Car.deleteOne({ _id: userId });
  }
}
