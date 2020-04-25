const Joi = require("joi");

const registerValidation = (data) => {
  const Schema = {
    email: Joi.string().required().email(),
    password: Joi.string().min(5)
  };
  return Joi.validate(data, Schema);
};


module.exports = {
    registerValidation
}