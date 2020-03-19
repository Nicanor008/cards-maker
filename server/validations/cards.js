const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (Validator.isEmpty(data.name)) {
    errors.message = "Activity Name field is required";
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "Message field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
