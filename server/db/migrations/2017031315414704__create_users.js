// 'use strict';

const Nodal = require('nodal');

class CreateUsers extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031315414704;
  }
  up() {
    return [
      this.createTable('users',
        [{ name: 'email',
          type: 'string',
          properties: { unique: true } },
          { name: 'points', type: 'int' },
          { name: 'Total_completed', type: 'int' },
          { name: 'Current_trail', type: 'int' },
          { name: 'password', type: 'string' },
          { name: 'username', type: 'string' },
        ]),
    ];
  }

  down() {
    return [
      this.dropTable('users'),
    ];
  }

}

module.exports = CreateUsers;
