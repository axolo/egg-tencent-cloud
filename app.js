'use strict';

const tencentCloudSdk = require('tencentcloud-sdk-nodejs');
const Cloud = require('./lib/cloud');

const createCloud = options => {
  const cloud = new Cloud({ ...options });
  const tencentCloud = options.tencentCloud || tencentCloudSdk;
  cloud.tencentCloud = tencentCloud;
  return cloud;
};

module.exports = app => {
  app.addSingleton('tencentCloud', createCloud);
};
