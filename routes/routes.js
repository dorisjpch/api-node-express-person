const express = require('express')
const router = express.Router()
const record = require('../services/servicebackend')

/* All posts */
router.get('/', async (req, res) => {
    await record.getRecord()
    .then(records => res.json(records))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* http://localhost:9009/api/people/e */
router.get('/:title', async (req, res) => {
    const title = req.params.title

    await record.getRecord(title)
    .then(record => res.json(record))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Delete a record Example: http://localhost:9009/api/people/Owen Lars*/
router.delete('/:title', async (req, res) => {
    const title = req.params.title

    await record.deleteRecord(title)
    .then(() => {
        return res.json({
            message: `The register #${title} has been deleted`
        })
    })
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router