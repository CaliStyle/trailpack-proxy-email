'use strict'
/* global describe, it */
const assert = require('assert')

describe('Test Email', () => {
  let Test
  it('should exist', () => {
    assert(global.app.api.emails['Test'])
    Test = global.app.emails.Test
  })
  it('should compose a test email', (done) => {
    Test.test({text: 'Test Email'})
      .then(email => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
