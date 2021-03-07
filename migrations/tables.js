exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {

        tbl.increments();

        tbl.string('email', 255)
            .notNullable()

        tbl.string('username', 255)
            .notNullable()
            .unique()

        tbl.string('password', 255)
            .notNullable()

    })

        .createTable('journals', (tbl) => {

            tbl.increments();

            tbl.string('title', 255) //JOURNAL Title
                .notNullable() //required

            tbl.string('content') //JOURNAL content
                .notNullable() //required

            tbl.date('date', 255) //Date

            tbl.integer('user_id').notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE') //required
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('journals')
};
