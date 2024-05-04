const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../helpers/token');
const ROLES = require('../constants/roles');

async function register(login, password) {
  if (!password) {
    throw new Error('Password empty');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ login, password: passwordHash });

  const token = generateToken({ id: user.id });

  return { user, token };
}

async function login(login, password) {
  const user = await User.findOne({ login });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Wrong password');
  }

  const token = generateToken({ id: user.id });

  return { user, token };
}

async function getUsers() {
  return await User.find();
}

function getRoles() {
  return [
    {
      id: ROLES.ADMIN,
      name: 'Admin',
    },
    {
      id: ROLES.MODERATOR,
      name: 'Moderator',
    },
    {
      id: ROLES.USER,
      name: 'User',
    },
  ];
}

async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

async function updateUser(id, userData) {
  return User.findByIdAndUpdate(id, userData, { returnDocument: 'after' });
}

module.exports = {
  register,
  login,
  getUsers,
  getRoles,
  deleteUser,
  updateUser,
};
