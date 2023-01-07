'use strict';

/**
 * eagle-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eagle-user.eagle-user');
