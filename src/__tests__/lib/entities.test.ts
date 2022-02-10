import {
  constructSequelizeModelDependencies,
  constructSequelizeModelFromEntity,
} from '../../lib/entities';
import ApplicationModel from '../fixtures/models/Application.model';
import ProjectModel from '../fixtures/models/Project.model';

test('constructSequelizeModelDependencies()', () => {
  const appDeps = constructSequelizeModelDependencies(
    ApplicationModel.relationships,
  );

  expect(appDeps).toBe('Project, User');

  const projectDeps = constructSequelizeModelDependencies(
    ProjectModel.relationships,
  );

  expect(projectDeps).toBe('User,Application, Event, Service');
});
test('constructSequelizeModelFromEntity()', () => {
  const result = constructSequelizeModelFromEntity(ApplicationModel);

  console.log(result);
  expect(result).toBe(`import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class ApplicationModel extends Model {}

  ApplicationModel.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      deployed_version: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      enabled: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: true,
        type: DataTypes.ENUM(),
      },
    },
    {
      createdAt: 'created',
      indexes: [{ fields: ['id'], unique: true }],
      modelName: 'Application',
      sequelize,
      updatedAt: 'updated',
    },
  );

  ApplicationModel.associate = function ({ Project, User }) {
    ApplicationModel.belongsTo(Project);
    ApplicationModel.belongsTo(User);
  };

  return ApplicationModel;
};
`);
});
