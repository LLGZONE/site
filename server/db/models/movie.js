module.exports = function(sequelize, DataTypes){
  return sequelize.define(
    'Movie', {
      title: {
        type: DataTypes.STRING(256),
        unique: true,
        allowNull: false
      },
      poster: {
        type: DataTypes.STRING(256),
        unique: true,
        allowNull: false
      }
    },
    {
      tableName: 'movies'
    }
  )
}