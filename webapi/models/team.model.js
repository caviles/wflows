var validators = require( './validators' );
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;


var teamSchema = new Schema({
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
