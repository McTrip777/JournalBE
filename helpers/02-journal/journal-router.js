router = require('express').Router();

const Journals = require('./journal-model');

router.get('/', async (req, res) => {
    try {
        journals = await Journals.find();
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        journal = await Journals.findById(req.params.id)
        if (journal) {
            res.status(200).json(journal)
        } else {
            res.status(404).send('journal not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        journal = await Journals.add(req.body)
        res.status(200).json(journal)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        count = await Journals.destroy(req.params.id)
        if (count > 0) {
            res.status(200).json('The journal has been removed')
        } else {
            res.status(401).json('The journal could not be found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let journal = await Journals.update(req.params.id, req.body)
        if (journal) {
            res.status(200).json(journal)
        } else {
            res.status(404).json('could not update')
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;