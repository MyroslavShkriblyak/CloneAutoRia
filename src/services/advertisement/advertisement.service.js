const { Advertisement } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return Advertisement.find(filter)
  },
  getById: async (filter = {}) => {
    return Advertisement.findById(filter)
  },
  updateAdvert: (advertId, newInfo) => {
    return Advertisement.findByIdAndUpdate(advertId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return Advertisement.create(newInfo)
  },
  deleteMany: async (advertId) => {
    return Advertisement.deleteMany({ _id: advertId })
  },
  deleteOne: async (advertId) => {
      return Advertisement.deleteOne({ _id: advertId })
  }
};
