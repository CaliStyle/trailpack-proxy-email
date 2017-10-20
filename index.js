'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class ProxyEmailTrailpack extends Trailpack {

  /**
   * Validates Configs
   */
  validate () {
    if (!this.app.config.proxyEmail) {
      return Promise.reject(new Error('No configuration found at config.proxyEmail!'))
    }

    return Promise.all([
      lib.Validator.validateProxyEmailConfig(this.app.config.proxyEmail)
    ])
  }

  /**
   * Adds generics' APIs to trails api, Adds generics' routes to app.routes
   */
  configure () {
    this.app.api.emails = this.app.api.emails || {}
    this.app.api.templates = this.app.api.templates || {}

    return Promise.all([
      lib.ProxyEmail.configure(this.app)
    ])
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

module.exports.Email = lib.Email
module.exports.Template = lib.Template
