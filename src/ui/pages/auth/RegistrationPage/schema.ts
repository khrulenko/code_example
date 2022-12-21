import Joi from 'joi';
import validRules, { schemaWrapper } from '../../../../common/validation';

const schema = schemaWrapper({
  email: validRules.EMAIL,
  password: validRules.PASSWORD,
  confirmation: Joi.string()
    .valid(Joi.ref('password'))
    .messages({ 'any.only': 'please, repeat the password' })
    .required(),
});

export default schema;
