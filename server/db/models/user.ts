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
        defaultValue: ''
      },
      region: {
        type: DataTypes.STRING(32),
        defaultValue: ''
      },
      description: {
        type: DataTypes.STRING(128),
        defaultValue: ''
      }
    },
    {
      tableName: 'users'
    }
  );
}
