/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
const uuid = require('uuid');


const operationList = [
  {
    id: uuid.v4(),
    cost: 100,
    type: 'addition',
    description: 'Addition',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'subtraction',
    description: 'Subtraction',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 200,
    type: 'multiplication',
    description: 'Multiplication',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'division',
    description: 'Division',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'square_root',
    description: 'Square Root',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuid.v4(),
    cost: 100,
    type: 'random_string',
    description: 'Random String',
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
