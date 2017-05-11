var validators = require( './validators' );
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;



var userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    validate: validators.nameValidator },
  teamId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    validate: validators.requiredStringValidator },
  userPhone: {
    type: String,
    required: true,
    validate: validators.requiredStringValidator },
  createdOn: { type: Date, default: Date.now }
});

// Export model...
module.exports = mongoose.model( 'User', userSchema );
