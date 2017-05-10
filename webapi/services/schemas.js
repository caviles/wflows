var mongoose = require('mongoose');


/*
All possible schema types
 http://mongoosejs.com/docs/schematypes.html
 var schema = new Schema({
 name:    String,
 binary:  Buffer,
 living:  Boolean,
 updated: { type: Date, default: Date.now },
 age:     { type: Number, min: 18, max: 65 },
 mixed:   Schema.Types.Mixed,
 _someId: Schema.Types.ObjectId,
 array:      [],
 ofString:   [String],
 ofNumber:   [Number],
 ofDates:    [Date],
 ofBuffer:   [Buffer],
 ofBoolean:  [Boolean],
 ofMixed:    [Schema.Types.Mixed],
 ofObjectId: [Schema.Types.ObjectId],
 nested: {
 stuff: { type: String, lowercase: true, trim: true }
 }
 })
 */

var userSchema = mongoose.Schema({
  userName: String,
  userId: String,
  userDateCreated: Date
});

var teamUserSchema = mongoose.Schema({
  teamId: String,
  userId: String,
  dateCreated: Date
});

var teamSchema = mongoose.Schema({
  teamId: String,
  teamName: String,
  dateCreated: Date
});

var siteStepsSchema = mongoose.Schema({
  siteId: String,
  dateCreated: Date,
  releaseNumber: Number,
  isActive:Boolean,
  steps:String
});

var siteSchema = mongoose.Schema({
  siteId: String,
  teamId: String,
  siteName: String,
  dateCreated: Date,
  url:String
});

var siteUserPermissionSchema = mongoose.Schema({
  uId: String,
  teamId: String,
  siteId:String,
  isAdmin: Boolean,
  isDeployer: Boolean
});


//add custom scripts
