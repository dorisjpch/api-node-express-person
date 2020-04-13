let records = require('../data/person.json')
const filename = './data/person.json'
const utils = require('../utils/modulesUtils.js')

function getRecord(title) {
    return new Promise((resolve, reject) => {
        utils.searchInArray(records, title)
        .then(rec => resolve(rec))
        .catch(err => reject(err))
    })
}

function deleteRecord(title) {
    return new Promise((resolve, reject) => {
        utils.searchInArray(records, title)
        .then(() => {
            records = records.filter(p => p.title !== title)
            utils.writeJSONFile(filename, records)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    getRecord,
    deleteRecord
}