# Minimum repro for AWS CDK aws_lambda_nodejs issue
## procedure to reproduce the issue
```bash
# Node.js 20 environment
# install pnpm
corepack enable
# install node modules
pnpm install
# synth CDK (only NgStack should fail)
pnpm cdk synth
```
