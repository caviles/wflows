let Team = require('../models/team.model');
let Users = require('../models/user.model');

exports.list = function(req, res) {
  var query = Users.find();
  var filter = req.body.idt;//teamid

  query.sort({ createdOn: 'desc' });

  if (filter.length > 0)
  {
    query.where({ teamId: filter})
  }

  query.exec(function(err, results) {
    if (err) {
      return res.status(401).send({status: "error", response : err});
    }
    else {
      return res.status(201).send({status: "success", response : results});
    }
  });
};

exports.create = function(req, res) {
  var entry = new Team({
    teamName: req.body.name,
    url: req.body.url
  });

  entry.save(function (err, results) {
    if (err) {

      return res.status(401).send({status: "error", response : err});
    }
    else {
      return res.status(201).send({status: "success", response : results});
    }
  });

};



