
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', post => {

    post.increments();//id, primary key

    post.string('postTitle', 250)//general issue/equipment device
        .notNullable();

    post.text('description') //description of the issue
        .notNullable();

    post.string('imgUrl', 2000) //image of issue or of equipment needed
        .defaultTo(null);

    post.boolean('resolved')
      .notNullable()
      .defaultTo(false);

    post.boolean('scheduled')
      .notNullable()
      .defaultTo(false);

    post.boolean('needsAtt')
      .notNullable()
      .defaultTo(true);

    post.string('user_school', 250)
      .notNullable()
      .references('school')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    post.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
