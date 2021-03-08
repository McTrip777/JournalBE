router = require('express').Router();

const Journals = require('./journal-model');

// GETS ALL JOURNALS, YOURS OR NOT

router.get('/', async (req, res) => {
    try {
        journals = await Journals.find();
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GETS ANY JOURNAL BY ID

// router.get('/:id', async (req, res) => {
//     try {
//         journal = await Journals.findById(req.params.id)
//         if (journal) {
//             res.status(200).json(journal)
//         } else {
//             res.status(404).send('journal not found')
//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// POSTS A JOURNAL, NOT NEEDED BECAUSE JOURNAL POSTING IS DONE THROUGH USERS

// router.post('/', async (req, res) => {
//     try {
//         journal = await Journals.add(req.body)
//         res.status(200).json(journal)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// DELETES A JOURNAL BY ID

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

// EDITS AN EXISTING POST

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