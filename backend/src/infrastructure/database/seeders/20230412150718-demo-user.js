/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
const uuid = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [{
        id: uuid.v4(),
        username: 'candidate@gmail.com',
        password: 'd2fea5a9793cb5995324fd4143f9f1693161dc341c173e6658935b15df75b4a7edc23012ec97668046e1afd631a3c69453dd14cc4a4fa060cc2d271a39eb640f.7bb59c80652be685',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
        balance: 2500,
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
  }
};
