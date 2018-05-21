
const should = require('should');
const request = require('../index.js');

describe('request-ntlm-continued', function () {

  function simpleGetRequest(options) {
    return function (callback) {
      request.get(options, undefined, (err, res, body) => {
        should.not.exist(err);
        should.exist(res);
        should.exist(body);
        callback();
      });
    };
  }

  this.timeout(10000);

  let executeRequestAgainsNtlmServer;
  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const options = require(`${__dirname}/ntlm-options`);
    executeRequestAgainsNtlmServer = simpleGetRequest(options);
  }
  catch (err) {
    // silence!
  }

  it('successfully execute a request against an NTLM server', executeRequestAgainsNtlmServer);

  describe('non-NTLM requests', () => {

    let options;
    beforeEach(() => {
      options = {
        username: 'username',
        password: 'password',
        ntlm_domain: 'yourdomain',
        workstation: 'workstation',
        url: 'https://www.google.com/search?q=ntlm',
        strictSSL: false,
      };
    });

    it('successfully execute a request against a non-NTLM server', (done) => {
      simpleGetRequest(options)(done);
    });

    it('fails when requesting non-NTLM resource with `options.ntlm.strict`', (done) => {
      options.ntlm = { strict: true };
      request.get(options, undefined, (err) => {
        should.exist(err);
        done();
      });
    });
  });
});
