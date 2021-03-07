
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        { id: 1, title: 'title1', content: "content1", user_id: 1 },
        { id: 2, title: 'title2', content: "content2", user_id: 1 },
        { id: 3, title: 'title3', content: "content3", user_id: 1 },
        { id: 4, title: 'title4', content: "content4", user_id: 2 },
        { id: 5, title: 'title5', content: "content5", user_id: 2 },
        { id: 6, title: 'title6', content: "content6", user_id: 3 }
      ]);
    });
};
