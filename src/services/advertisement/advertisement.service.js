const { AdvertisementModel } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return AdvertisementModel.find(filter)
  },
  getById: async (filter = {}) => {
    return AdvertisementModel.findById(filter)
  },
  updateAdvert: (advertId, newInfo) => {
    return AdvertisementModel.findByIdAndUpdate(advertId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return AdvertisementModel.create(newInfo)
  },
  deleteMany: async (advertId) => {
    return AdvertisementModel.deleteMany({ _id: advertId })
  },
  deleteOne: async (advertId) => {
      return AdvertisementModel.deleteOne({ _id: advertId })
  }
};
