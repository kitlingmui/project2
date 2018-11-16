module.exports = (sequelize, DataTypes) => {

    const Character = sequelize.define('Characters', {
        name: DataTypes.STRING,
        class: DataTypes.STRING,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        health: DataTypes.INTEGER,
        hasArmor: DataTypes.BOOLEAN,
        hasWeapon: DataTypes.BOOLEAN,
        isEquipped: DataTypes.BOOLEAN,
    });

    //Character.associate = models => {
    //    Character.hasMany(models.Items, {
    //        onDelete:'cascade'
    //    })
    //   
    //
Character.sync()
.then(r => {
    Character.bulkCreate([
        {
            name: 'jim',
            class: 'Paladin',
            attack: 100,
            defense: 90,
            health: 1000,
            hasArmor: false,
            hasWeapon: false,
            isEquipped: false
        },
        {
            name: 'bob',
            class: 'Cleric',
            attack: 30,
            defense: 60,
            health: 600,
            hasArmor: false,
            hasWeapon: false,
            isEquipped: false
        },
        {
            name: 'tim',
            class: 'Scholar',
            attack: 80,
            defense: 70,
            health: 800,
            hasArmor: false,
            hasWeapon: false,
            isEquipped: false
        },
        {
            name: 'rob',
            class: 'Monk',
            attack: 90,
            defense: 80,
            health: 900,
            hasArmor: false,
            hasWeapon: false,
            isEquipped: false
        }
    ]).catch(e => console.log(e));
});
    return Character
}