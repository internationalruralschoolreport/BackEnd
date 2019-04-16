
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {
          id: 1,
          name: 'Tom Jones',
          email: 'TJones@school.com',
          password: 'test123',
        },
        {
          id: 2,
          name: 'Sally Smith',
          email: 'SSmith@school.com',
          password: 'test123',
        },
        {
          id: 3,
          name: 'Beth White',
          email: 'BWhite@school.com',
          password: 'test123',
        },
      ]);
};
