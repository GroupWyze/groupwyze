module.exports = function (sequelize, DataTypes) {
    // ID, Name, email, username, date_created, date_deleted

    let User = sequelize.define("User", {
        auth0Id: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: true },
        lastName: { type: DataTypes.STRING, allowNull: true },
        nickname: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        imageUrl: { type: DataTypes.STRING, allowNull: true }
    });

    return User;
};