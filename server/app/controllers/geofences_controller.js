'use strict';

const Nodal = require('nodal');
const Geofence = Nodal.require('app/models/geofence.js');

class GeofencesController extends Nodal.Controller {

  index() {

    Geofence.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Geofence.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Geofence.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Geofence.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Geofence.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = GeofencesController;
