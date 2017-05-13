let validators = require( './validators' );
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;


let teamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
    validate: validators.nameValidator
  },
  teamId: {
    type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId(),
    required: true
  },
  createdOn: {
    type: Date, default: Date.now
  }
});


// Export model...
module.exports = mongoose.model( 'Team', teamSchema );
