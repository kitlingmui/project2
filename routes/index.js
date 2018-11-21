const db = require('../models')

module.exports = app => {

    // page route part
    app.get('/', (req, res) => {
      res.render('index')
    })
  
    app.get('/game', (req, res) => {
      res.render('components/game')
    })
  
    app.get('/score', (req, res) => {
      res.render('components/score')
    })

    app.get('/help', (req, res) => {
      res.render('components/help')
    })

    // game logic part
    app.get('/Characters', (req, res) => {
        db.Characters.findAll({})
        .then(r => res.json(r))
        .catch(e => console.log(e))
    });
    app.get('/Enemies', (req, res) => {
        db.Enemies.findAll({})
        .then(r => res.json(r))
        .catch(e => console.log(e))
    })
    app.post('/Characters', (req, res) => {
        db.Characters.create(req.body)
        .then(r => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    app.post('/Enemies', (req, res) => {
        db.Enemies.create(req.body)
        .then(r => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}
