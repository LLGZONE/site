export default function(sequelize, DataTypes) {
  return sequelize.define(
    'Article',
    {
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
      tableName: 'articles'
    }
  );
}
