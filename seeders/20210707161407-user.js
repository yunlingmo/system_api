"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: '傻鳄',
          password: 'sha123',
          bio: '傻鳄傻鳄傻鳄',
          image: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: '傻黄',
          password: 'sha123',
          bio: '傻鳄傻鳄傻鳄',
          image: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: '傻蛋',
          password: 'sha123',
          bio: '傻鳄傻鳄傻鳄',
          image: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
