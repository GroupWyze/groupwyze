module.exports = function (sequelize, DataTypes) {
    // ID, Name, email, username, date_created, date_deleted

    var User = sequelize.define("User", {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        imageUrl: { type: DataTypes.STRING, allowNull: true }
    });

    User.associate = function (models) {
        // Associating User with shindigs

        User.belongsToMany(models.Shindig, {through: models.ShindigUser});

    };


    return User;
};