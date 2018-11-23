module.exports = (sequelize, DataTypes) => {

    const Character = sequelize.define('Characters', {
        name: DataTypes.STRING,
        class: DataTypes.STRING,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        health: DataTypes.INTEGER,
    });

Character.sync()
.then(r => {
    Character.bulkCreate([
        {
        name: 'jim',
        class: 'Paladin',
        attack: 90,
        defense: 140,
        health: 1000,
        },

        {
        name: 'bob',
        class: 'Cleric',
        attack: 80,
        defense: 80,
        health: 700,
        },

        {
        name: 'tim',
        class: 'Scholar',
        attack: 140,
        defense: 70,
        health: 800,
        },

        {
        name: 'rob',
        class: 'Monk',
        attack: 120,
        defense: 80,
        health: 900,
        }
    ]).catch(e => console.log(e));
});
    return Character
}