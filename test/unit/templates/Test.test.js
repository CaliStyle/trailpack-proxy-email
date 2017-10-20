'use strict'
/* global describe, it */
const assert = require('assert')

describe('Test Template', () => {
  let Test
  it('should exist', () => {
    assert(global.app.api.templates['Test'])
    Test = global.app.templates.Test
  })
  it('should get Test Template Class id', (done) => {
    assert.equal(Test.id, 'test')
    done()
  })
  it('should get Test Template Class name', (done) => {
    assert.equal(Test.name, 'Test')
    done()
  })
  it('should get eligible templates', (done) => {
    assert.equal(Test.templates.length, 1)
    done()
  })
})
