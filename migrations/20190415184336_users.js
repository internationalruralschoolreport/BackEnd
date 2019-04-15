
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', user => {

        user.increment()//id, primary key

        user.string('name', 128) //name
            .notNullable()
            .unique();

        user.string('email', 128)
            .notNullable()
            .unique();

        user.string('password', 128)
            .notNullable();
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
