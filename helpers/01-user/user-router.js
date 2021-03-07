const router = require('express').Router();
const Users = require('./user-model');

router.get('/', async (req, res) => {
    try {
        users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        user = await Users.findById(req.params.id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send('user not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get Users Journals
router.get('/:user_id/journals/', async (req, res) => {
    try {
        let user = await Users.getUserJournals(req.params.user_id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send('user journals not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/:journal_id/journals', async (req, res) => {
    try {
        const journal = await Users.addJournalToUser({ title: req.body.title, content: req.body.content, date: req.body.date, user_id: req.params.journal_id })
        if (journal) {
            res.status(200).json({ journal })
        } else {
            res.status(404).send('could not post journal for the user')
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;
