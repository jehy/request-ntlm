# Request-NTLM-lite

[![npm](https://img.shields.io/npm/v/request-ntlm-lite.svg)](https://npm.im/request-ntlm-lite)
[![license](https://img.shields.io/npm/l/request-ntlm-lite.svg)](https://npm.im/request-ntlm-lite)
[![Build Status](https://travis-ci.org/jehy/request-ntlm-lite.svg?branch=master)](https://travis-ci.org/jehy/request-ntlm-lite)
[![dependencies Status](https://david-dm.org/jehy/request-ntlm-lite/status.svg)](https://david-dm.org/jehy/request-ntlm-lite)
[![devDependencies Status](https://david-dm.org/jehy/request-ntlm-lite/dev-status.svg)](https://david-dm.org/jehy/request-ntlm-lite?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/jehy/request-ntlm-lite/badge.svg)](https://snyk.io/test/github/jehy/request-ntlm-lite)

An ntlm authentication wrapper for the Request module, fork of
([request-ntlm-continued](https://www.npmjs.com/package/request-ntlm-continued)).

## Install with NPM

```
$ npm install --save-dev request-ntlm-lite
```

## Usage

```javascript
var ntlm = require('request-ntlm-lite');

var opts = {
  username: 'username',
  password: 'password',
  ntlm_domain: 'yourdomain',
  workstation: 'workstation',
  url: 'http://example.com/path/to/resource'
};
var json = {
  // whatever object you want to submit
};
ntlm.post(opts, json, function(err, response) {
  // do something
});
```

Requests can also be streamed:

```javascript
ntlm.get(opts, json, null, fs.createWriteStream('example.pdf'));
```

## Changes from original

* Less dependencies
* Refactor
* Fix errors
