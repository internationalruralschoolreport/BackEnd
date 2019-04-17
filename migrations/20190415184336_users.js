
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', user => {

        user.increments();//id, primary key

        user.string('firstName', 128) //name
            .notNullable();

        user.string('lastName', 128) //name
            .notNullable();

        user.string('email', 128)
            .notNullable()
            .unique();

        user.string('password', 128)
            .notNullable();

        user.string('school', 250)
            .notNullable();

        user.boolean('isAdmin')
            .notNullable()
            .defaultTo(false);
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
