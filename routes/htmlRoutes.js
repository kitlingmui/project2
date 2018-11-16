// include path package to get the correct path

var path = require("path")

//Routing to page

module.exports = function (app) {  
    // get home page link
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    // get game page link
    app.get('/game', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/game.html"))
    })

    // get score page link
    app.get('/score', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/score.html"))
    })

    // get help page link
    app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/help.html"))
    })
}
