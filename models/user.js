module.exports = function (sequelize, DataTypes) {
    // ID, Name, email, username, date_created, date_deleted

    let User = sequelize.define("User", {
        user_id: { type: DataTypes.STRING, allowNull: false },
        given_name: { type: DataTypes.STRING, allowNull: true },
        family_name: { type: DataTypes.STRING, allowNull: true },
        nickname: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: true },
        password: { type: DataTypes.STRING, allowNull: true },
        picture: { type: DataTypes.STRING, allowNull: false },
        emailVerified: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
    });

    return User;
};