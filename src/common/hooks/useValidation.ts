import { useEffect, useState } from 'react';
import Joi from 'joi';
import { StringObject } from '../types';

const useValidation = (value: any, schema: Joi.Schema) => {
  const [errors, errorsSet] = useState<StringObject>({});

  useEffect(() => {
    if (!value) return;

    if (Joi.isSchema(schema)) {
      const errorsData: StringObject = {};

      const { error } = schema.validate(value, {
        abortEarly: false,
        allowUnknown: true,
        errors: { label: false },
        messages: {
          'any.required': 'Required',
          'any.only': 'Required',
          'number.base': 'Required',
          'string.base': 'Required',
          'boolean.base': 'Required',
        },
      });

      error?.details?.forEach(({ path: [field], message }) => {
        errorsData[field] = message;
      });

      errorsSet(errorsData);
    }
  }, [value]);

  return errors;
};

export default useValidation;
