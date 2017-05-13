let validators = require( './validators' );
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;


let projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    validate: validators.nameValidator
  },
  teamId: {
    type: Schema.Types.ObjectId,
    required: true
   },
  currentRelease: {
    type: Schema.Types.ObjectId
  },
  url:{
    type: String,
    required: true,
    validate: validators.requiredStringValidator
  },
  createdOn: {
    type: Date, default: Date.now
  }
});


// Export model...
module.exports = mongoose.model( 'Project', projectSchema );
