
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', post => {

    post.increment()//id, primary key

    post.string('postTitle', 250)//general issue/equipment device
        .notNullable();

    post.text('description') //description of the issue
        .notNullable();

    post.string('imgUrl', 2000) //image of issue or of equipment needed

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
