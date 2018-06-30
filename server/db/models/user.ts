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
        allowNull: false
      },
      avatar: {
        type: DataTypes.STRING(64),
        allowNull: false,
        defaultValue: ''
      },
      language: {
        type: DataTypes.STRING(32),
        defaultValue: 'en'
      },
      region: {
        type: DataTypes.STRING(32),
        defaultValue: 'us'
      }
    },
    {
      tableName: 'users'
    }
  );
}
