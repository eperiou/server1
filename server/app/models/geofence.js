'use strict';

const Nodal = require('nodal');

class Geofence extends Nodal.Model {}

Geofence.setDatabase(Nodal.require('db/main.js'));
Geofence.setSchema(Nodal.my.Schema.models.Geofence);

module.exports = Geofence;
