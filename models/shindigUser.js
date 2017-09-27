module.exports = function (sequelize, DataTypes) {
    // ID, shindig_id, user_id, is_host, can_edit, 
    // can_invite, can_vote, is_attending, date_created, date_updated, date_deleted


    var ShindigUser = sequelize.define("ShindigUser", {
        isHost: { type: DataTypes.BOOLEAN, allowNull: false },
        canEdit: { type: DataTypes.BOOLEAN, allowNull: false },
        canInvite: { type: DataTypes.BOOLEAN, allowNull: false },
        canVote: { type: DataTypes.BOOLEAN, allowNull: false },
        isAttending: { type: DataTypes.BOOLEAN, allowNull: false },
        votesRemaining: { type: DataTypes.INTEGER, defaultValue: 5, allowNull: false },
        deletedAt: { type: DataTypes.DATE, allowNull: true }
    });

    ShindigUser.associate = function (models) {
        // Associating User with votes
        ShindigUser.hasMany(models.Vote);
    };

    return ShindigUser;
};