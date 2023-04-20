/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
const uuid = require('uuid');


const operationList = [
  {
    id: uuid.v4(),
    cost: 100,
    type: 'addition',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'subtraction',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 200,
    type: 'multiplication',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'division',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'square_root',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'random_string',
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
