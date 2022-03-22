import { Condition } from '@srclaunch/types';
import { Sequelize, Model, ModelStatic } from 'sequelize';
export declare type DataClientConnectionOptions = {
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
export declare type SequelizeModel = {
    associate: (models: Record<string, ModelStatic<Model<any, any>>>) => void;
} & ModelStatic<Model<any, any>>;
export declare type DataClientOptions = {
    connection: DataClientConnectionOptions;
    models: Record<string, (sequelize: Sequelize) => SequelizeModel>;
};
export declare class DataClient {
    db: Record<string, SequelizeModel>;
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
    constructor(config: DataClientOptions);
    getClient(): Promise<Sequelize | void>;
    connect({ alter, force, }: {
        alter?: boolean;
        force?: boolean;
    }): Promise<Sequelize | void>;
    create(model: string, data?: Record<string, any>): Promise<Model<any, any> | Model<any, any>[] | void>;
    deleteMany(model: string, ids: string[]): Promise<Model<any, any> | void>;
    deleteOne(model: string, id: string): Promise<Model<any, any> | void>;
    getOne(model: string, id: string): Promise<Model<any, any> | null | void>;
    getMany(model: string, props?: {
        conditions?: Condition[];
        filters?: Record<string, any>;
        limit?: number;
        offset?: number;
    }): Promise<Model<any, any>[] | void>;
    updateMany(model: string, data: Record<string, any>[]): Promise<Model<any, any> | void>;
    updateOne(model: string, id: string, data: Record<string, any>): Promise<Model<any, any> | void>;
}
//# sourceMappingURL=data-client.d.ts.map