const fs = require('fs')

function searchInArray(array, title) {

    return new Promise((resolve, reject) => {
        const row = array.filter(r => r.title.toLowerCase().includes(title.toLowerCase()));
        if (!row) {
            reject({
                message: 'Title is not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    searchInArray,
    writeJSONFile
}