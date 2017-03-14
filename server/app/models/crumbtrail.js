// 'use strict';

const Nodal = require('nodal');

class Crumbtrail extends Nodal.Model {}

Crumbtrail.setDatabase(Nodal.require('db/main.js'));
Crumbtrail.setSchema(Nodal.my.Schema.models.Crumbtrail);

module.exports = Crumbtrail;
