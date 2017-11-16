'use strict'

const Model = require('trails/model')

/**
 * @module Email
 * @description Email
 */
module.exports = class Email extends Model {

  static config (app, Sequelize) {
    return {
      options: {
        underscored: true,
        classMethods: {
          /**
           * Associate the Model
           * @param models
           */
          associate: (models) => {

          },
          // TODO
          resolve: function(coupon, options){
            return Promise.resolve(coupon)
            //
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {
    return {
      // The type of the email
      type: {
        type: Sequelize.STRING
      },
      // The template to use for the email
      template: {
        type: Sequelize.TEXT
      },
      // The language the template is in
      lang: {
        type: Sequelize.STRING,
        defaultValue: 'EN'
      }
    }
  }
}
