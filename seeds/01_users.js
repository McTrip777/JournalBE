
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'email@gmail.com', username: "one", password: "password1" },
        { id: 2, email: 'email@aol.com', username: "two", password: "password2" },
        { id: 3, email: 'email@yahoo.com', username: "three", password: "password3" }
      ]);
    });
};
