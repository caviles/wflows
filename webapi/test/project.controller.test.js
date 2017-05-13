let expect = require('chai').expect;
let Project = require('../controllers/project.controller');

let req = {
  body:"123"
};

let res = {};

expect(Project.list(req, res)).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
