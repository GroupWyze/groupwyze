module.exports = function (sequelize, DataTypes) {
    // ID, Name, zip, city, address, collapse_time, host_id, 
    // shindig_date, description, date_created, date_updated, date_deleted


    var Shindig = sequelize.define("Shindig", {
        name: { type: DataTypes.STRING, allowNull: false },
        zip: { type: DataTypes.INTEGER, allowNull: true },
        city: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: true },
        collapseTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
        shindigTime: {type: DataTypes.DATE, allowNull: false},
        description: { type: DataTypes.TEXT, allowNull: true }
    }, {
            paranoid: true
        });

    Shindig.associate = function (models) {
        // Associating Shindig with Category
        Shindig.hasMany(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });

        // Associating Shindig with User
        Shindig.belongsToMany(models.User, {through: models.ShindigUser});
    };

    return Shindig;
};