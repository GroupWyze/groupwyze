module.exports = function (sequelize, DataTypes) {
    // ID, Name, zip, city, address, collapse_time, host_id, 
    // shindig_date, description, date_created, date_updated, date_deleted


    var Shindig = sequelize.define("Shindig", {
        name: { type: DataTypes.STRING, allowNull: false },
        zip: { type: DataTypes.INTEGER, allowNull: true },
        city: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: true },
        collapseTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true }
    }, {
            paranoid: true
        });

    Shindig.associate = function (models) {
        // Associating Shindig with Category
        Shindig.hasMany(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
        Shindig.hasMany(models.ShindigUser, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Shindig;
};

// const Foo = sequelize.define('foo', {
//  // instantiating will automatically set the flag to true if not set
//  flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },

//  // default values for dates => current time
//  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },

//  // setting allowNull to false will add NOT NULL to the column, which means an error will be
//  // thrown from the DB when the query is executed if the column is null. If you want to check that a value
//  // is not null before querying the DB, look at the validations section below.
//  title: { type: Sequelize.STRING, allowNull: false },

//  // Creating two objects with the same value will throw an error. The unique property can be either a
//  // boolean, or a string. If you provide the same string for multiple columns, they will form a
//  // composite unique key.
//  uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex' },
//  uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex' },

//  // The unique property is simply a shorthand to create a unique constraint.
//  someUnique: { type: Sequelize.STRING, unique: true },

//  // It's exactly the same as creating the index in the model's options.
//  { someUnique: { type: Sequelize.STRING } },
//  { indexes: [ { unique: true, fields: [ 'someUnique' ] } ] },

//  // Go on reading for further information about primary keys
//  identifier: { type: Sequelize.STRING, primaryKey: true },

//  // autoIncrement can be used to create auto_incrementing integer columns
//  incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },

//  // You can specify a custom field name via the 'field' attribute:
//  fieldWithUnderscores: { type: Sequelize.STRING, field: 'field_with_underscores' },

//  // It is possible to create foreign keys:
//  bar_id: {
//    type: Sequelize.INTEGER,

//    references: {
//      // This is a reference to another model
//      model: Bar,

//      // This is the column name of the referenced model
//      key: 'id',

//      // This declares when to check the foreign key constraint. PostgreSQL only.
//      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//    }
//  }
// })