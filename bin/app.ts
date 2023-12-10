#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NgStack } from '../lib/ng-stack';
import { OkStack } from '../lib/ok-stack';

const app = new cdk.App();

new NgStack(app, 'NgStack');
new OkStack(app, 'OkStack');
