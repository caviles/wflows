
var nameValidator = [
  function (val) {
    return (val.length > 0 && val.toLocaleLowerCase() != 'none')
  },
  // Custom error text...
  'Select a valid member name.' ];

var requiredStringValidator = [
  function (val) {
    var testVal = val.trim();
    return (testVal.length > 0)
  },
  // Custom error text...
  '{PATH} cannot be empty' ];


module.exports = {
 requiredStringValidator:requiredStringValidator,
  nameValidator:nameValidator
}
