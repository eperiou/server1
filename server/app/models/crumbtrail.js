// 'use strict';

const Nodal = require('nodal');
// const Crumb = Nodal.require('/app/models/crumb.js');
class Crumbtrail extends Nodal.Model {}

Crumbtrail.setDatabase(Nodal.require('db/main.js'));
Crumbtrail.setSchema(Nodal.my.Schema.models.Crumbtrail);
// Crumbtrail.joinedBy(Crumb, { multiple: true });
module.exports = Crumbtrail;
