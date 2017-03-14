'use strict';

const Nodal = require('nodal');

class CreateCrumbs extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031420314577;
  }

  up() {
    return [
      this.createTable('crumbs', [
        { name: 'trail_Id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'order_Number', type: 'int' },
        { name: 'location', type: 'int' },
        { name: 'text', type: 'text' },
        { name: 'image', type: 'string' },
        { name: 'video', type: 'string' },
        { name: 'aR', type: 'string' },
      ]),
    ];
  }

  down() {
    return [
      this.dropTable('crumbs'),
    ];
  }

}

module.exports = CreateCrumbs;
