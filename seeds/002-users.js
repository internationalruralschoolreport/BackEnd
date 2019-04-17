
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {
          id: 1,
          firstName: 'Lambda',
          lastName: 'Admin',
          email: 'lambda@admin.com',
          password: 'pass',
          school: 'Lambda School',
          isAdmin: true
        },
        {
          id: 2,
          firstName: 'Sally',
          lastName: 'Smith',
          email: 'SSmith@school.com',
          password: 'pass',
          school: 'Lansdale Catholic High School',
          isAdmin: false
        },
        {
          id: 3,
          firstName: 'Beth',
          lastName: 'White',
          email: 'BWhite@school.com',
          password: 'pass',
          school: 'Lambda School',
          isAdmin: false
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Doe',
          email: 'JDoe@school.com',
          password: 'pass',
          school: 'Lambda School',
          isAdmin: false
        },
      ]);
};
