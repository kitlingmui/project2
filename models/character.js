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
        name: 'Cloud',
        attack: 90,
        defense: 140,
        health: 1000,
        },

        {
        name: 'Bob',
        attack: 80,
        defense: 80,
        health: 1000,
        },

        {   
        name: 'Tim',
        attack: 140,
        defense: 70,
        health: 1000,
        },

        {
        name: 'Rob',
        attack: 120,
        defense: 80,
        health: 1000,
        }
    ]).catch(e => console.log(e));
});
    return Character
}