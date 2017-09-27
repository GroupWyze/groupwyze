module.exports = function (sequelize, DataTypes) {
  //ID, name, user_add_enabled, shindig_id, yelp_enabled, 
  //date_created, date_updated, date_deleted

  var Category = sequelize.define("Category", {
    name: { type: DataTypes.STRING, allowNull: false },
    userAddEnabled: { type: DataTypes.BOOLEAN, allowNull: false },
    yelpEnabled: { type: DataTypes.BOOLEAN, allowNull: false }
  }, {
      paranoid: true
    });

  Category.associate = function (models) {
    // Associating Category with Item
    Category.hasMany(models.Item, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Category;
};