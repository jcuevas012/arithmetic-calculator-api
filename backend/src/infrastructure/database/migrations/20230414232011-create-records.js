'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('records', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      }, 
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      }, 
      userBalance: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      }, 
      operationResponse: {
        allowNull: false,
        type: Sequelize.STRING,
      }, 
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      operationId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('records');
  }
};
