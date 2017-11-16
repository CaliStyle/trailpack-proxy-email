'use sticy'
const joi = require('joi')
const lib = require('.')

module.exports = {
  validateProxyEmailConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, lib.Schemas.proxyEmailConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.proxyEmail: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
