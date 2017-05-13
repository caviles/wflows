var Projects = require('../models/project.model');



exports.list = function(req, res) {
  var query = Projects.find();
  var filter = req.body.idt;

  query.sort({ createdOn: 'desc' });
  if (filter.length > 0)  {
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
  var entry = new Projects({
    projectName: req.body.projectName,
    teamId: req.body.idt,
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
