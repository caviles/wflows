let express = require('express');
let router = express.Router();
let userController = require('../controllers/user.controller');
let projectController = require('../controllers/project.controller');
let projectVersionStepsController = require('../controllers/project.version.steps.controller');
let projectUserPermissionController = require('../controllers/project.user.permission.controller');
let teamController = require('../controllers/team.controller');

router.post('/user/logout', function(req, res) {
  return userController.logout(req, res);
});

router.post('/user/login', function(req, res) {
  return userController.login(req, res);
});

router.get('/user/create', function(req, res) {
  return userController.create(req, res);
});

router.get('/team/get', function(req, res) {
  return teamController.list(req, res);
});

router.post('/project/set', function(req, res) {
  return teamController.create(req, res);
});

router.post('/project/get', function(req, res) {
  return projectController.list(req, res);
});

router.post('/projectuserpermission/set', function(req, res) {
  return projectController.create(req, res);
});

router.post('/projectversionsteps/get', function(req, res) {
  return projectVersionStepsController.list(req, res);
});

router.post('/projectversionsteps/set', function(req, res) {
  return projectVersionStepsController.create(req, res);
});

router.post('/projectuserpermission/get', function(req, res) {
  return projectUserPermissionController.list(req, res);
});

router.post('/projectuserpermission/set', function(req, res) {
  return projectUserPermissionController.create(req, res);
});

module.exports = router;
