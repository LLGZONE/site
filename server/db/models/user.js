export default function(sequelize, DataTypes) {
  return sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false
      }
    },
    {
      tableName: 'users'
    }
  );
}
