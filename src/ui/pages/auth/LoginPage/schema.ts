import validRules, { schemaWrapper } from '../../../../common/validation';

const schema = schemaWrapper({
  email: validRules.EMAIL,
  password: validRules.PASSWORD,
});

export default schema;
