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
    await queryInterface.bulkInsert('Languages', [{
        id: 1,
        name: 'Francais',
        slug: 'fr-FR',
        speak: 2,
        understand: 2,
        write: 2,
        userId: 1
      }, {
        id: 2,
        name: 'Englais',
        slug: 'en-EN',
        speak: 1,
        understand: 2,
        write: 1,
        userId: 1
      },
      {
        id: 3,
        name: 'Néelandais',
        slug: 'nl-NL',
        speak: 0,
        understand: 0,
        write: 0,
        userId: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};