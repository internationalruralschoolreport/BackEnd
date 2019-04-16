
exports.seed = function(knex, Promise) {
      return knex('posts').insert([
        {
          id: 1,
          postTitle: 'Shortage of Art Supplies',
          description: 'Our Art classes are suffering from a shortage of art supplies. Working in the arts helps learners to develop creative problem-solving skills. The arts provide challenges for learners at all levels. Art education connects students with their own culture as well as with the wider world.',
          imgUrl: 'https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?cs=srgb&dl=art-supplies-arts-and-crafts-ballpens-159644.jpg&fm=jpg'
        },
        {
          id: 2,
          postTitle: 'New, Energy Efficient Lightbulbs',
          description: 'Students and faculty had the idea to replace the lights throughout the school with energy-efficient bulbs. Although they can initially cost more than traditional incandescent bulbs, during their lifetime they save you money, because they use less energy.',
          imgUrl: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?cs=srgb&dl=alternative-energy-background-blue-1036936.jpg&fm=jpg'
        },
        {
          id: 3,
          postTitle: 'New Team Jerseys for Soccer Team',
          description: 'We are going into our 10th season using these jerseys. Many of them are in poor condition or too damaged to be used. We need new jerseys to better represent our school and soccer program.',
          imgUrl: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?cs=srgb&dl=action-athletes-ball-274422.jpg&fm=jpg'
        },
      ]);
};
