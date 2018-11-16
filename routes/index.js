const db = require('../models')

module.exports = app => {
    app.get('/Characters', (req, res) => {
        db.Characters.findAll({})
        .then(r => res.json(r))
        .catch(e => console.log(e))
    });
    app.get('/Items', (req, res) => {
        db.Items.findAll({})
        .then(r => res.json(r))
        .catch(e => console.log(e))
    })
    app.post('/Characters', (req, res) => {
        db.Characters.create(req.body)
        .then(r => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    app.post('/Items', (req, res) => {
        db.Items.create(req.body)
        .then(r => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}
