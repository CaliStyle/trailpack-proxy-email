'use strict'

module.exports = class Email  {
  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      value: app
    })
  }
}