// 'use strict';
const rp = require('request-promise');

const Nodal = require('nodal');
const Mocha = require('mocha');

const it = Mocha.it;

class IndexControllerTest extends Nodal.mocha.Test {

  test(expect) {
    it('Should return an HTTP 200', (done) => {
      this.endpoint('/').get((status) => {
        expect(status).to.equal(200);
        done();
      });
    });
  }
}

module.exports = IndexControllerTest;
