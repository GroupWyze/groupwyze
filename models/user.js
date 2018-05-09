module.exports = function (sequelize, DataTypes) {
    // ID, Name, email, username, date_created, date_deleted

    let User = sequelize.define("User", {
        auth0Id: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        imageUrl: { type: DataTypes.STRING, allowNull: true }
    });

    return User;
};