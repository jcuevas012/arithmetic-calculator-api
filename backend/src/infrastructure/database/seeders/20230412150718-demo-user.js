/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
const uuid = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [{
        id: uuid.v4(),
        username: 'candidate@gmail.com',
        password: '88babfe254ae3d63d1a8d830ac30e39992fb1a2c5db8faa4dfbf9129e72c2850132fa688bd5f867836f9c3b62d6169d26527daa5c82b5f1d2babfc2297b30e4b.4929a709bd54f7a4',
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
