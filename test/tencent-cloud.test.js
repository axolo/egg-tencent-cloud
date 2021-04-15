'use strict';

const mock = require('egg-mock');

describe('test/tencent-cloud.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-cloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tencentCloud')
      .expect(200);
  });
});
