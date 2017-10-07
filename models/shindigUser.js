module.exports = function (sequelize, DataTypes) {
    // ID, shindig_id, user_id, is_host, can_edit, 
    // can_invite, can_vote, is_attending, date_created, date_updated, date_deleted


    var ShindigUser = sequelize.define("ShindigUser", {
        isHost: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        canEdit: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        canInvite: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        canVote: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        acceptedInvite: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        isAttending: { type: DataTypes.BOOLEAN, allowNull: true },
        votesRemaining: { type: DataTypes.INTEGER, defaultValue: 5, allowNull: false }
    }, {
            paranoid: true
        });

    ShindigUser.associate = function (models) {
        // Associating User with votes
        ShindigUser.hasMany(models.Vote);
        ShindigUser.belongsTo(models.User);
    };

    return ShindigUser;
};