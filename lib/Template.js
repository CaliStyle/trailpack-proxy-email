'use strict'
// https://www.npmjs.com/package/ejs
const ejs = require('ejs')

module.exports = class Template  {
  constructor (app) {
    Object.defineProperties(this, {
      app: {
        enumerable: false,
        value: app
      },
      ejs: {
        enumerable: false,
        value: function (input, data, options) {
          input = input || ''
          data = data || {}
          options = options || {}
          return ejs.render(input, data, options)
        },
        writable: true
      }
    })
  }

  /**
   * Return the id of this template class
   */
  get id () {
    return this.constructor.name.replace(/(\w+)Template/, '$1').toLowerCase()
  }

  /**
   * Get's the name of the template class
   */
  get name() {
    return this.constructor.name
  }

  /**
   * Get a list of eligible templates on this template class
   * @returns {Array}
   */
  get templates() {
    const notAllowed = ['ejs']
    const templates = []
    if (this.methods) {
      this.methods.forEach(method => {
        if (notAllowed.indexOf(method) === -1) {
          templates.push(`${this.name}.${method}`)
        }
      })
    }
    return templates
  }
}
