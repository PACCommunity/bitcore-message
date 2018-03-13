
# PAC Message Verification and Signing for Bitcore-Pac


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-pac.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-pac)
[![Build Status](https://img.shields.io/travis/PACCommunity/bitcore-message-pac.svg?branch=master&style=flat-square)](https://travis-ci.org/PACCommunity/bitcore-message-pac)
[![Coverage Status](https://img.shields.io/coveralls/PACCommunity/bitcore-message-pac.svg?style=flat-square)](https://coveralls.io/r/PACCommunity/bitcore-message-pac?branch=master)

bitcore-message-pac adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore repo](https://github.com/PACCommunity/bitcore-pac) for more information.

## Getting Started

```sh
npm install bitcore-message-pac
```

```sh
bower install bitcore-message-pac
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-pac');
var Message = require('bitcore-message');

var privateKey = bitcore.PrivateKey.fromWIF('cSPGgk9xaL6b2HTEP4eok6ofKsSfuEaJ2AZfEDkG893WkqvVrriP');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'qUkSiJvjyUSdqzNVucqqo772qXuDTSZwQ9';
var signature = 'IM8VMj4syDmFX5a08QWF2RkwAmVQlqMZZnqwYhhkaqKhTwx7/CnYOaiq4aog/Ky3iA4R7u37U+57PGG9Cb1Hg5s=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/PACCommunity/bitcore-pac/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/PACCommunity/bitcore-pac/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

