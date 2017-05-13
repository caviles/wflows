let validators = require( './validators' );
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;


let projectVersionStepsSchema = new Schema({
  projectId: {
    type: String,
    required: true,
    validate: validators.nameValidator
  },
  teamId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  version: {
    type: String,
    required: true,
    validate:validators.requiredStringValidator
  },
  steps:{
    type: String,
    required: true,
    validate: validators.requiredStringValidator
  },
  variables:{
  type: String,
    required: true,
    validate: validators.requiredStringValidator
},
  createdOn: {
    type: Date, default: Date.now
  }
});


// Export model...
module.exports = mongoose.model( 'ProjectVersionSteps', projectVersionStepsSchema );
