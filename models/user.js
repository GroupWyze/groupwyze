module.exports = function (sequelize, DataTypes) {
    // ID, Name, email, username, date_created, date_deleted

    var User = sequelize.define("User", {
        name: { type: DataTypes.STRING, allowNull: false },
        url: { type: DataTypes.STRING, allowNull: false },
        imageUrl: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        yelpId: { type: DataTypes.STRING, allowNull: true },
        deletedAt: { type: DataTypes.DATE, allowNull: true }
    });

    User.associate = function (models) {
        // Associating User with votes
        User.hasMany(models.ShindigUser, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return User;
};