import AWS from 'aws-sdk';
export declare function getSecrets(paths: string[]): Promise<AWS.SSM.ParameterList | void>;
export declare function getParameters(paths: string[]): Promise<AWS.SSM.ParameterList | void>;
//# sourceMappingURL=aws-ssm.d.ts.map