'use strict';

const Nodal = require('nodal');

class CreateGeofences extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031421435657;
  }

  up() {
    return [
      this.createTable('geofences',
        [{ name: 'crumb_id', type: 'int' },
        { name: 'id', type: 'string' },
        { name: 'latitude', type: 'int' },
        { name: 'longitude', type: 'int' },
        { name: 'radius', type: 'int' },
        { name: 'notification_id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'text', type: 'text' },
        { name: 'small_icon', type: 'string' },
        { name: 'open_app_on_click', type: 'boolean' },
        { name: 'vibration', type: 'int' },
        { name: 'data', type: 'string' }]),
    ];
  }

  down() {
    return [
      this.dropTable('geofences'),
    ];
  }
 }

module.exports = CreateGeofences;
