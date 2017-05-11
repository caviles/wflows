var validators = require( './validators' );
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;


var projectUserPermissionSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  teamId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  isAdmin:{
    type: Boolean,
    required: false
  },
  isDeployer:{
    type: Boolean,
    required: false
  },
  isViewer:{
    type: Boolean,
    required: false
  },
  createdOn: {
    type: Date, default: Date.now
  }
});


// Export model...
module.exports = mongoose.model( 'ProjectUserPermission', projectUserPermissionSchema );
