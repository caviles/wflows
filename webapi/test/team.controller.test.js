let assert = require("assert");
let Team = require("../models/team.model");
let Users = require("../models/user.model");
let sinon = require("sinon");
let expect = require('chai').expect;
require( 'sinon-mongoose' );


// sinon.stub(Team, "find").yields(null, {id:1});
sinon.stub(Users, "find").yields(null, {id:1});
//var teamController = new TeamController();




describe('Team', function() {
  beforeEach(function () {
    // sinon.stub(Team, 'find');
  });

  it('should be invalid if name is empty', function (done) {
    var t = new Team();
    //t.teamName = "hello";
    t.validate(function (err) {
      expect(err.errors.teamName).to.exist;
      done();
    });
  });
  it('should be valid if name is not empty', function(done) {
    var t = new Team();
    t.teamName = "hello";
    t.validate(function(err) {

      try {
        expect(err.errors.teamName).to.not.exist;
      }
      catch(e){
        console.log("entering catch block");
        console.log(e);
        console.log("leaving catch block");
      }
      done();
    });
  });

  it('should have a find method on the schema', function () {
// If you are using callbacks, use yields so your callback will be called
    sinon.mock(Team)
      .expects('find')
      .chain('limit').withArgs(10)
      .chain('sort').withArgs('-postDate')
      .chain('exec')
      .yields(null, 'SUCCESS!');

    Team.find(10, function (err, res) {
      assert(res, 'SUCCESS!');
    });

  });
});

