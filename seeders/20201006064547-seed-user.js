'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'Oracions2410',
      email: 'Oracions2410@gmail.com',
      slug: 'o-r-a-c-i-o-n-s',
    }, {
      id: 2,
      username: 'MonkeyD',
      email: 'MonkeyD@gmail.com',
      slug: 'm-o-n-k-e-y-d'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};