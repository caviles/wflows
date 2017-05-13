var expect = require('chai').expect;
var Project = require('../controllers/project.controller');

var req = {
  body:"123"
};

var res = {};

expect(Project.list(req, res)).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
