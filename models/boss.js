module.exports = (sequelize, DataTypes) => {

    const Boss = sequelize.define('Enemies', {
        name: DataTypes.STRING,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        health: DataTypes.INTEGER,
    });

Boss.sync({ force: true })
    .then(r => {
    Boss.create({
        name: 'Bahamut',
        attack: 250,
        defense: 60,
        health: 4000,
        }).catch(e => console.log(e));
});
    return Boss
}