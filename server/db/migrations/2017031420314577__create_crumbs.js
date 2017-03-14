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
        { name: 'Trail_Id', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Description', type: 'int' },
        { name: 'Order_Number', type: 'int' },
        { name: 'Location', type: 'string' },
        { name: 'Text', type: 'text' },
        { name: 'Image', type: 'string' },
        { name: 'Video', type: 'string' },
        { name: 'AR', type: 'string' },
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
