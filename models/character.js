module.exports = (sequelize, DataTypes) => {

    const Character = sequelize.define('Characters', {
        name: DataTypes.STRING,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        health: DataTypes.INTEGER,
    });

Character.sync({ force: true })
.then(r => {
    Character.bulkCreate([
        {
        name: 'Naruto',
        attack: 90,
        defense: 140,
        health: 1000,
        },

        {
        name: 'Kakashi',
        attack: 80,
        defense: 80,
        health: 700,
        },

        {   
        name: 'Gaara',
        attack: 140,
        defense: 70,
        health: 800,
        },

        {
        name: 'Sasuke',
        attack: 120,
        defense: 80,
        health: 900,
        }
    ]).catch(e => console.log(e));
});
    return Character
}