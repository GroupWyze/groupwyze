module.exports = function (sequelize, DataTypes) {
    //ID, shindig_category_item_id, shindig_user_id, date_created

    var Vote = sequelize.define("Vote", {});


    return Vote;
};
