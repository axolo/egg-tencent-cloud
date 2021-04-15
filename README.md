# egg-tencent-cloud

[Tencent Cloud SDK] 4.x plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-tencent-cloud --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentCloud = {
  enable: true,
  package: '@axolo/egg-tencent-cloud',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.
for example:

```js
// {app_root}/config/config.default.js
exports.tencentCloud = {
  client: {
    // tencentCloud, // tencentcloud-sdk-nodejs user-defined
    // region: 'ap-guangzhou',
    // reqMethod: 'POST',
    // reqTimeout: 60,
    // signMethod: 'HmacSHA256',
    secretId: 'SECRET_ID',
    secretKey: 'SECRETK_EY',
    model: 'sms',
    version: 'v20190711',
    action: 'SendStatusStatistics',
    params: {
      SmsSdkAppid: 'SMS_SDK_APPID',
      Limit: 0,
      Offset: 0,
    },
};
```

## API

### client

the member of Tencent Cloud SDK Model client.
usage like:

```js
'use strict';

const Controller = require('egg').Controller;

class TencentCloudController extends Controller {
  async index() {
    const { app, ctx } = this;
    const smsCount = app.tencentCloud.get('smsCount');
    const result = await smsCount.client.SmsPackagesStatistics({
      ...smsCount.options.params,
      Limit: 10,
    });
    ctx.body = result;
  }
}

module.exports = TencentCloudController;
```

### action(params)

> params

| params |  type  |            description             |
| ------ | ------ | ---------------------------------- |
| params | object | params of Tencent Cloud SDK Action |

> return

a `Promise` of Tencent Cloud SDK Model client Action response.

## Example

```js
'use strict';

const dayjs = require('dayjs');
const Controller = require('egg').Controller;

class TencentCloudController extends Controller {
  async index() {
    const { app, ctx } = this;
    const smsCount = app.tencentCloud.get('smsCount');
    const now = dayjs();
    const lastMonth = now.subtract(1, 'months');
    const StartDateTime = lastMonth.format('YYYYMMDDhh');
    const EndDataTime = now.format('YYYYMMDDhh');
    const result = await smsCount.action({ StartDateTime, EndDataTime });
    ctx.body = result;
  }
}

module.exports = TencentCloudController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-tencent-cloud/issues).

## License

[MIT](LICENSE)

[Tencent Cloud SDK]: https://cloud.tencent.com/document/sdk/Node.js
