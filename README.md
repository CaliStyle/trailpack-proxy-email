# trailpack-proxy-email

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

## An email template builder for Proxy Engine, built with love by your friends at  [Cali-Style](https://cali-style.com)

Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)

## Install

```sh
$ npm install --save trailpack-proxy-email
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-proxy-email')
  ]
}
```

```js
// config/proxyEmail.js
module.exports = {
  
}
```

## Usage
Many different modules in Proxy Engine will use an email to notify users. This composes the emails using either custom/ejs Templates, or Database emails.


[npm-image]: https://img.shields.io/npm/v/trailpack-proxy-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-proxy-email
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/trailpack-proxy-email/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/trailpack-proxy-email/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/trailpack-proxy-email.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/trailpack-proxy-email
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/trailpack-proxy-email.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/trailpack-proxy-email

