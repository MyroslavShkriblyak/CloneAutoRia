const { User } = require('../../dataBase');

module.exports = {
  getAll: async (filter = {}) => {
    return User.find(filter)
  },
  findOneByParams: async (filter = {}) => {
    return User.findOne(filter)
  },
  update: async (userId, newInfo) => {
    return User.findByIdAndUpdate(userId, newInfo, { new: true })
  },
  created: async (newInfo) => {
    return User.create(newInfo)
  },
  deleteOne: async (userId) => {
    return User.deleteOne({ _id: userId });
  }
};
