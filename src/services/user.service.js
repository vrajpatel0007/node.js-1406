const User = require("../models/User.modale");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};
const getUserList = async (filter, options) => {
  return User.find()
};
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};
module.exports = {
  createUser,
  getUserList,
  deleteUser
  };