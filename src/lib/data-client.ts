import { Condition, Environment } from '@srclaunch/types';
import { DataTypes, Sequelize, Model, ModelStatic } from 'sequelize';
import { singular } from 'pluralize';
import { pascalCase } from 'change-case';
import { Exception } from '@srclaunch/exceptions';
import { Logger } from '@srclaunch/logger';

export type DataClientConnectionOptions = {
  bastion?: {
    host?: string;
    key?: string;
  };
  database?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
};

export { Sequelize };

export type SequelizeModel = {
  associate: (models: Record<string, ModelStatic<Model<any, any>>>) => void;
} & ModelStatic<Model<any, any>>;

export type DataClientOptions = {
  connection: DataClientConnectionOptions;
  environment: Environment;
  logger?: Logger;
  models: Record<string, (sequelize: Sequelize) => SequelizeModel>;
};

export class DataClient {
  db: Record<string, SequelizeModel> = {};
  cluster?: {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    username?: string;
  };
  connection?: DataClientConnectionOptions;
  logger: Logger;
  models: Record<string, (sequelize: Sequelize) => SequelizeModel>;
  client?: Sequelize;

  constructor(config: DataClientOptions) {
    this.connection = config.connection;
    this.models = config.models;
    this.logger =
      config.logger ??
      new Logger({
        environment: config.environment,
      });
  }

  async getClient(): Promise<Sequelize | void> {
    try {
      this.logger.info('Connecting to database...');

      if (
        !this.connection?.database ||
        !this.connection?.username ||
        !this.connection?.password ||
        !this.connection?.host ||
        !this.connection?.port
      ) {
        return;
      }

      this.client = new Sequelize(
        this.connection.database,
        this.connection.username,
        this.connection.password,
        {
          dialect: 'postgres',
          host: this.connection.host,
          port: this.connection.port,
          ssl: true,
        },
      );

      for (const [modelName, model] of Object.entries(this.models)) {
        // @ts-ignore
        const cModel = model(this.client, DataTypes);

        this.db[modelName] = cModel;
      }

      for (const [modelName, model] of Object.entries(this.db)) {
        this.db[modelName]?.associate?.(this.db);
      }

      return this.client;
    } catch (err: any) {
      const exception = new Exception(err.name, { cause: err });

      this.logger.exception(exception.toJSON());
    }
  }

  async connect({
    alter = false,
    force = false,
  }: {
    alter?: boolean;
    force?: boolean;
  }): Promise<Sequelize | void> {
    try {
      await this.getClient();

      if (this.cluster) {
        if (!this.connection?.bastion?.host) {
          try {
            if (this.client) return this.client.sync({ alter, force });
          } catch (err: any) {
            console.error(err);
          }
        } else {
          // const config = {
          //   dstHost: cluster.Endpoint,
          //   dstPort: cluster.Port,
          //   host: this.bastionHost,
          //   keepAlive: true,
          //   port: 22,
          //   privateKey:
          //     this.privateKey ??
          //     require('fs').readFileSync(
          //       `~/.ssh/srclaunch-app-lab-${
          //         getEnvironment().name === 'production' ? 'production' : 'test'
          //       }-bastion-key`,
          //     ),
          // };
          // const tnl = tunnel(config, async (error, tnl) => {
          //   if (this.sequelizeClient) this.sequelizeClient.sync();
          //   // return this.sequelizeClient;
          //   setTimeout(() => {
          //     // you only need to close the tunnel by yourself if you set the
          //     // keepAlive:true option in the configuration !
          //     tnl.close();
          //   }, 5000);
          // });
        }
      }
    } catch (err: any) {
      const exception = new Exception(err.name, { cause: err });

      this.logger.exception(exception.toJSON());
    }
  }

  async create(
    model: string,
    data?: Record<string, any>,
  ): Promise<Model<any, any> | Model<any, any>[] | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    if (Array.isArray(data)) {
      return this.db[modelName]?.bulkCreate(data);
    } else {
      return this.db[modelName]?.create(data);
    }
  }

  async deleteMany(
    model: string,
    ids: string[],
  ): Promise<Model<any, any> | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    const result = await this.db?.[modelName]?.destroy({ where: { id: ids } });

    // @ts-ignore
    return result;
  }

  async deleteOne(model: string, id: string): Promise<Model<any, any> | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    if (!id) return;

    const result = await this.db?.[modelName]?.destroy({ where: { id } });
    // @ts-ignore
    return result;
  }

  async getOne(
    model: string,
    id: string,
  ): Promise<Model<any, any> | null | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    return this.db?.[modelName]?.findOne({ where: { id } });
  }

  async getMany(
    model: string,
    props?: {
      conditions?: Condition[];
      filters?: Record<string, any>;
      limit?: number;
      offset?: number;
    },
  ): Promise<Model<any, any>[] | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    console.log('filters', props?.filters);
    console.log('limit', props?.limit);

    if (props?.filters) {
      return this.db?.[modelName]?.findAll({ where: props.filters });
    }

    console.log('asdf');

    return this.db?.[modelName]?.findAll();
  }

  async updateMany(
    model: string,
    data: Record<string, any>[],
  ): Promise<Model<any, any> | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) return;

    // @ts-ignore
    const result = await this.db?.[modelName]?.upsert(data);

    // @ts-ignore
    return result;
  }

  async updateOne(
    model: string,
    id: string,
    data: Record<string, any>,
  ): Promise<Model<any, any> | void> {
    let modelName = '';

    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) return;

    const entity = await this.db?.[modelName]?.findOne({ where: { id } });

    if (!entity) return;

    await entity.update(data);

    return entity;
  }
}
