/* eslint no-console: [0] */
'use strict'

const Email = require('../../').Email

module.exports = class Test extends Email {
  /**
   *
   * @param data
   * @param options
   * @returns {Promise.<{type: string, subject: string, text: string, html:string, send_email:boolean}>}
   */
  test(data, options) {
    data = data || {}
    options = options || {}

    const text = data.text || 'Test'
    const html = data.html || this.app.templates.Test.test(data)
    const subject = data.subject || 'Test'
    const sendEmail = data.send_email || true

    return Promise.resolve({
      type: 'test',
      subject: subject,
      text: text,
      html: html,
      send_email: sendEmail
    })
  }
}
