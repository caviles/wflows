var ProjectVersionSteps = require('../models/project.version.steps.model');

exports.list = function(req, res) {
  var query = ProjectVersionSteps.find();
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
  var entry = new ProjectVersionSteps({
    projectId: req.body.idp,
    teamId: req.body.idt,
    userId: req.body.idu,
    version:req.body.version,
    steps:req.body.steps,
    variables:req.body.variables
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

