// 'use strict';

const Nodal = require('nodal');

const Crumbtrail = Nodal.require('app/models/crumbtrail.js');
// const Geofence = Nodal.require('app/models/geofence.js');
class Crumb extends Nodal.Model {}

Crumb.setDatabase(Nodal.require('db/main.js'));
Crumb.setSchema(Nodal.my.Schema.models.Crumb);
Crumb.joinsTo(Crumbtrail, { multiple: true, as: 'crumb' });
// Crumb.joinedBy(Geofence, { multiple: false });
module.exports = Crumb;
