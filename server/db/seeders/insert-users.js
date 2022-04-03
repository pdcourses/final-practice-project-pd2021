"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'buyer',
        lastName: 'buyer',
        displayName: 'buyer',
        password: 'qwerty',
        email: 'buyer@gmail.com',
        role: 'customer',
        balance: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'creator',
        lastName: 'creator',
        displayName: 'creator',
        password: 'qwerty',
        email: 'creator@gmail.com',
        role: 'creator',
        balance: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
