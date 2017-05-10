var firebase = require("firebase");

const projectsteps = 'projectsteps';





function addProjectStepsByUidAndProjectId(uid, pid, steps, callback) {
  firebase.database().ref(projectsteps).set({
    uid: uid,
    pid: pid,
    steps: steps
  }).then(function (response) {
    // Sign-out successful.
    callback(null, response);
  }).catch(function (error) {
    // An error happened.
    callback(error, null);
  });

}

function getProjectStepsByUidAndProjectId(uid, callback) {
  firebase.database().ref('/projectsteps').orderByChild("uid").equalTo(123).on("child_added", function(data) {
    callback(data);
  });
}

//usersQuery.isEqual(usersRef.orderByKey().limitToLast(10));  // false

// Find all dinosaurs whose height is exactly 25 meters.
// var ref = firebase.database().ref("dinosaurs");
// ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });

// https://firebase.google.com/docs/reference/js/firebase.database.Query

//
// // Find all dinosaurs whose names come before Pterodactyl lexicographically.
// var ref = firebase.database().ref("dinosaurs");
// ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });

module.exports = {

  addProjectStepsByUidAndProjectId : addProjectStepsByUidAndProjectId,
  getProjectStepsByUidAndProjectId : getProjectStepsByUidAndProjectId


}
