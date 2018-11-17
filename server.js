const express = require('express');
const app = express();
const SQLZ = require('sequelize');
const path = require('path');
const bodyparser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const sequelize = new SQLZ
('mysql://root:rootroot@localhost:3306/game_db')
sequelize.authenticate().then(() => console.log('Sucessfull')).catch(e => console.log(e));

require('./routes')(app)
require('./models').sequelize.sync().then(() => {
    app.listen(3000, () => console.log('http://localhost:3000'));     
});





