import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import path = require('path');

export class NgStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda_nodejs.NodejsFunction(this, "PnpmRepro", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      entry: path.resolve(__dirname, "../src/index.ts"),
      handler: "main",
      bundling: {
        forceDockerBundling: true,
        nodeModules: ["sharp"],
      }
    })
  }
}
