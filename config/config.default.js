'use strict';

const tencentCloud = require('tencentcloud-sdk-nodejs');

/**
 * egg-tencent-cloud default config
 *
 * @member Config#tencentCloud
 * @property {object} tencentCloud tencentcloud-sdk-nodejs
 * @property {string} region tencent cloud model region
 * @property {string} reqMethod HttpProfile reqMethod
 * @property {string} reqTimeout HttpProfile reqTimeout
 * @property {string} signMethod HttpProfile signMethod
 * @property {string} secretId tencent cloud model SecretId
 * @property {string} secretKey tencent cloud model SecretKey
 * @property {string} model tencent cloud model name
 * @property {string} version tencent cloud cloud model version
 * @property {object} params Action params of tecnet cloud model client
 * @see https://github.com/TencentCloud/tencentcloud-sdk-nodejs
 */
exports.tencentCloud = {
  default: {
    tencentCloud,
    region: 'ap-guangzhou',
    reqMethod: 'POST',
    reqTimeout: 60,
    signMethod: 'HmacSHA256',
  },
  // client: {
  //   secretId: 'SECRET_ID',
  //   secretKey: 'SECRETK_EY',
  //   model: 'sms',
  //   version: 'v20190711',
  //   action: 'SendStatusStatistics',
  //   params: {
  //     SmsSdkAppid: 'SMS_SDK_APPID',
  //     Limit: 0,
  //     Offset: 0,
  //   },
  // },
};
