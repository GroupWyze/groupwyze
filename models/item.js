module.exports = function (sequelize, DataTypes) {
    //ID, shindig_category_id, name, URL, image_url, 
    //description, yelp_id, date_created, date_updated, date_deleted


    var Item = sequelize.define("Item", {
        name: { type: DataTypes.STRING, allowNull: false },
        url: { type: DataTypes.STRING, allowNull: true },
        imageUrl: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        yelpId: { type: DataTypes.STRING, allowNull: true }
    }, {
            paranoid: true
        });

    Item.associate = function (models) {
        // Associating Item with votes
        Item.hasMany(models.Vote, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Item;
};

