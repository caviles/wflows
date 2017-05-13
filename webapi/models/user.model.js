let validators = require( './validators' );
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;



let userSchema = new Schema({
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
