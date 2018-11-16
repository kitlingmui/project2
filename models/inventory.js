module.exports = (sequelize, DataTypes) => {

const Inventory = sequelize.define('Items', {

    itemName: DataTypes.STRING,
    attackStat: DataTypes.INTEGER,
    defenseStat: DataTypes.INTEGER,
    isEquipped: DataTypes.BOOLEAN,
    isItemInStorage: DataTypes.BOOLEAN
})

//Inventory.associate = models => {
//    Inventory.belongsTo(models.Characters, {foreignKey: {allowNull: false}})
//

Inventory.sync()
.then(r => {
    Inventory.bulkCreate([
        {
            itemName: 'Sword',
            attackStat: 150,
            defenseStat: 0,
            isEquipped: false,
            isItemInStorage: true
        },
        {
            itemName: 'Staff',
            attackStat: 140,
            defenseStat: 0,
            isEquipped: false,
            isItemInStorage: true
        },
        {
            itemName: 'Tomb',
            attackStat: 200,
            defenseStat: 0,
            isEquipped: false,
            isItemInStorage: true
        },
        {
            itemName: 'Monk Fist',
            attackStat: 100,
            defenseStat: 0,
            isEquipped: false,
            isItemInStorage: true
        },
// defensive items
        {
            itemName: 'Chest',
            attackStat: 0,
            defenseStat: 200,
            isEquipped: false,
            isItemInStorage: true
        },
        {
            itemName: 'Sheild',
            attackStat: 0,
            defenseStat: 100,
            isEquipped: false,
            isItemInStorage: true
        },
        {
            itemName: 'Robes',
            attackStat: 0,
            defenseStat: 120,
            isEquipped: false,
            isItemInStorage: true
        },
    ]).catch(e => console.log(e))
});
return Inventory
}