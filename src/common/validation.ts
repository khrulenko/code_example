import Joi from 'joi';
import { MIN_PASSWORD_LENGTH } from './constants';

export const schemaWrapper = (rules: Joi.PartialSchemaMap<any> | undefined) =>
  Joi.object({ ...rules });

const validRules = {
  EMAIL: Joi.string()
    .empty([''])
    .email({ tlds: { allow: false } })
    .required(),
  PASSWORD: Joi.string()
    .empty([''])
    .min(MIN_PASSWORD_LENGTH)
    .messages({
      'string.min': `password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
    })
    .required(),
  NUMERIC_STRING: Joi.string()
    .pattern(/^(0|[1-9]\d*)(\.\d+)?$/, 'numbers')
    .empty([''])
    .messages({
      'string.pattern.name': 'only positive integers or decimals',
    }),
};

export default validRules;
