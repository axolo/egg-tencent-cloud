'use strict';

class Cloud {
  constructor(options) {
    const {
      tencentCloud,
      secretId,
      secretKey,
      region = 'ap-guangzhou',
      reqMethod = 'POST',
      reqTimeout = 60,
      signMethod = 'HmacSHA256',
      model,
      version,
    } = options;

    const Client = tencentCloud[model][version].Client;

    const config = {
      // 腾讯云认证信息
      credential: {
        secretId,
        secretKey,
      },
      // 产品地域
      region,
      // 可选配置实例
      profile: {
        signMethod, // 签名方法
        httpProfile: {
          reqMethod, // 请求方法
          reqTimeout, // 请求超时时间，默认60s
        },
      },
    };
    this.client = new Client(config);
    this.options = options;
  }

  action(params) {
    return new Promise((resolve, reject) => {
      const { client, options } = this;
      client[options.action]({
        ...options.params,
        ...params,
      }).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }
}

module.exports = Cloud;
