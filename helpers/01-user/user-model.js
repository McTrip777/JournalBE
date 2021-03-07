const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserJournals,
    addJournalToUser
}

function find() {
    return db('users')
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return db('users').where({ id }).first()
}

function getBy(select) {
    return db('users').where(select).first();
}


function destroy(id) {
    return db('users').where({ id }).del()
}

function getUserJournals(userID) {
    return db('journals')
        .join('users', 'users.id', 'journals.user_id')
        .select('journals.*')
        .where('journals.user_id', userID)
}

function addJournalToUser(journals) {
    return db('journals')
        .insert({
            title: journals.title,
            content: journals.content,
            date: journals.date,
            user_id: journals.user_id
        })
}