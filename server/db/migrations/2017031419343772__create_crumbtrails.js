'use strict';

const Nodal = require('nodal');

class CreateCrumbtrails extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031419343772;
  }

  up() {
    return [
      this.createTable('crumbtrails', [
        { name: 'creator', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'Description', type: 'text' },
        { name: 'Rating', type: 'int' },
        { name: 'Type', type: 'string' },
        { name: 'length', type: 'string' },
        { name: 'Requires_money', type: 'string' },
        { name: 'Start_Crumb', type: 'int' },
        { name: 'End_Crumb', type: 'int' },
      ]),
    ];
  }

  down() {
    return [
      this.dropTable('crumbtrails'),
    ];
  }

}

module.exports = CreateCrumbtrails;
