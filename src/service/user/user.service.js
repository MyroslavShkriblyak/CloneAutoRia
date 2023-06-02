const { UserModel } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return UserModel.find(filter)
  },
  findOneByParams: async (filter = {}) => {
    return UserModel.findOne(filter)
  },
  update: async (userId, newInfo) => {
    return UserModel.findByIdAndUpdate(userId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return UserModel.create(newInfo)
  },
  deleteOne: async (userId) => {
    return UserModel.deleteOne({ _id: userId });
  }
};
