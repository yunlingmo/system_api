"use strict";

const moment = require("moment")

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
          createdAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          lastLogintime: moment().format('YYYY-MM-DD, HH:mm:ss'),
          thisLogintime: moment().format('YYYY-MM-DD, HH:mm:ss')
        },
        {
          username: '傻黄',
          password: 'sha123',
          bio: '傻鳄傻鳄傻鳄',
          image: '',
          createdAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          lastLogintime: moment().format('YYYY-MM-DD, HH:mm:ss'),
          thisLogintime: moment().format('YYYY-MM-DD, HH:mm:ss')
        },
        {
          username: '傻蛋',
          password: 'sha123',
          bio: '傻鳄傻鳄傻鳄',
          image: '',
          createdAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD, HH:mm:ss'),
          lastLogintime: moment().format('YYYY-MM-DD, HH:mm:ss'),
          thisLogintime: moment().format('YYYY-MM-DD, HH:mm:ss')
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
