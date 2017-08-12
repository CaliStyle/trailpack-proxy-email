/* eslint no-console: [0] */
'use strict'

const Template = require('../../').Template

module.exports = class Test extends Template {
  test(data) {
    return 'This is a test'
  }
}
