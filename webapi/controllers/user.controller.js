let userAuth = require('../business/auth/user.auth');

exports.create = function(req, res) {
  if (!req.body) return res.status(400).send("The body cannot be empty");

  var newUserEmail = req.body.email;
  var newUserPass = req.body.password;

  userAuth.addUser(newUserEmail, newUserPass,

    function(err, response) {

      if (err) {
        return res.status(401).send({status: "error", response : err});

      } else {
        return res.status(200).send({status: "success", response : response});
      }
    });

};


exports.logout = function(req, res) {
  userAuth.logout(
    function(err, response) {

      if (err) {
        return res.status(401).send({status: "error", response : err});

      } else {
        return res.status(200).send({status: "success", response : response});
      }
    });

};


exports.login = function(req, res) {

  var userEmail = req.body.email;
  var userPassword = req.body.password;

  userAuth.authenticate(userEmail, userPassword,

    function(err, response) {

      if (err) {
        return res.status(401).send({status: "error", response : err});

      } else {
        return res.status(200).send({status: "success", response : response});
      }
    });

};

