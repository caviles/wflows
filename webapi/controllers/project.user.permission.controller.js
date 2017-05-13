var ProjectUserPermission = require('../models/project.user.permissions.model');

exports.list = function(req, res) {
  var query = ProjectUserPermission.find();
  var filter = req.body.idt;

  query.sort({ createdOn: 'desc' });
  if (filter.length > 0)
  {
    query.where({ projectId: filter})
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
  var entry = new ProjectUserPermission({
    projectId: req.body.idp,
    teamId: req.body.idt,
    userId: req.body.idu,
    isAdmin:req.body.isAdmin,
    isDeployer:req.body.isDeployer,
    isViewer:req.body.isViewer
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

