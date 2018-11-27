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

    // ****Game logic part****

    // find the first Boss
    app.get('/api/Boss/:bo', (req, res) => {
        db.Enemies.findOne({
            where: {
                id: req.params.bo
            }
        })
        .then(r => res.json(r))
        .catch(e => console.log(e))
    });

    // find All Characters
    app.get('/api/Characters/', (req, res) => {
        db.Characters.findAll({
        })
        .then(r => res.json(r))
        .catch(e => console.log(e))
    });

    // find One Characters by id
    app.get('/api/Characters/:ch', (req, res) => {
        db.Characters.findOne({
            where: {
                    id: req.params.ch
                }
        })
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
