/* eslint no-console: [0] */
'use strict'

// const lib = require('./')
// const _ = require('lodash')
// const routeOrder = require('trailpack-proxy-engine/lib/utils').routeOrder
const trailsCore = require('trails/lib').Core

module.exports = {
  /**
   * configure - Configure the Proxy Engine
   * @param app
   */
  configure: (app) => {

    // Define New properties on app
    Object.defineProperties(app, {
      emails: {
        enumerable: true,
        writable: false,
        value: {}
      },
      templates: {
        enumerable: true,
        writable: false,
        value: {}
      }
    })

    // Bind the Methods
    Object.assign(app.emails, trailsCore.bindMethods(app, 'emails'))
    Object.assign(app.templates, trailsCore.bindMethods(app, 'templates'))

    return
  }
}
