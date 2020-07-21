import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv';
import AppError from '@shared/errors/AppErrors';
import { JSONSchema7 } from 'json-schema';

const ValidateReceivedJSON = (MembersListSchema: JSONSchema7) => (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const ajv = new Ajv();
  const validate = ajv.compile(MembersListSchema);
  const isValid = validate(request.body);

  if (!isValid) {
    throw new AppError('Incorrect data', 404);
  }
  return next();
};
export default ValidateReceivedJSON;
