// import Logger from '@srclaunch/logger';
import { getParameters } from '@srclaunch/secrets';
// import { getEnvironment } from '@srclaunch/utils';
import AWS from 'aws-sdk';
// import { ParameterList } from 'aws-sdk/clients/ssm';
import { Condition} from '@srclaunch/types';
import { DataTypes, Sequelize, Model, ModelStatic } from 'sequelize';
import { singular } from 'pluralize';
import { pascalCase } from 'change-case';
// import tunnel from 'tunnel-ssh';

// const logger = Logger();

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
  models: Record<string, (sequelize: Sequelize) => SequelizeModel>;
  client?: Sequelize;

  constructor(config: DataClientOptions) {
    this.connection = config.connection;
    this.models = config.models;
  }

  async getDbCluster(): Promise<AWS.RDS.DBCluster | void> {
    const clusters = await getParameters([
      `/app-lab-test/db/aurora-postgresql-cluster`,
    ]);

    if (!clusters) return;

    const params = {
      DBClusterIdentifier: clusters?.[0]?.Value,
    };

    const rds = new AWS.RDS();

    const describeResult = await rds.describeDBClusters(params).promise();
    const cluster = describeResult.DBClusters?.[0];

    if (cluster) {
      this.cluster = {
        database: cluster.DatabaseName,
        host: cluster.Endpoint,
        password: this.connection?.password,
        port: cluster.Port,
        username: cluster.MasterUsername,
      };

      return cluster;
    }
  }

  async getClient(): Promise<Sequelize | void> {
    if (
      !this.cluster ||
      !this.cluster.database ||
      !this.cluster.username ||
      !this.cluster.password ||
      !this.cluster.host
    ) {
      return;
    }

    this.client = new Sequelize(
      this.cluster.database,
      this.cluster.username,
      this.cluster.password,
      {
        dialect: 'postgres',
        host: this.cluster.host,
        port: this.cluster.port,
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
  }

  async connect({
    alter = false,
    force = false,
  }: {
    alter?: boolean;
    force?: boolean;
  }): Promise<Sequelize | void> {
    await this.getDbCluster();
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
  }

  async create(model: string, data?: Record<string, any>): Promise<Model<any, any> | Model<any, any>[] | void> {
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


  async deleteMany(model: string, ids: string[]): Promise<Model<any, any> | void> {
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


  async getOne(model: string, id: string): Promise<Model<any, any> | null | void> {
    let modelName = '';
    Object.entries(this.db).forEach(([name, m]) => {
      if (name === singular(pascalCase(model))) modelName = name;
    });

    if (!modelName) {
      return;
    }

    return this.db?.[modelName]?.findOne({ where: { id } });
  }

  async getMany(model: string, props?: { 
    conditions?: Condition[],
    filters?: Record<string, any>,
    limit?: number;
    offset?: number
  }): Promise<Model<any, any>[] | void> {
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

    console.log('asdf')

    return this.db?.[modelName]?.findAll();
  }

  async updateMany(model: string, data: Record<string, any>[]): Promise<Model<any, any> | void> {
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

  async updateOne(model: string, id: string, data: Record<string, any>): Promise<Model<any, any> | void> {
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