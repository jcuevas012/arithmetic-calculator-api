/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
const uuid = require('uuid');


const operationList = [
  {
    id: uuid.v4(),
    cost: 100,
    type: 'Addition',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'Subtraction',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 200,
    type: 'Multiplication',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'Division',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'Square Root',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'Random String',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('operations', 
      operationList, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('operations', null, {});
  }
};
