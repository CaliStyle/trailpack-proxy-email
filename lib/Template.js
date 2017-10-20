'use strict'

module.exports = class Template  {
  constructor (app) {
    Object.defineProperty(this, 'app', {
      enumerable: false,
      value: app
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
    const notAllowed = []
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
