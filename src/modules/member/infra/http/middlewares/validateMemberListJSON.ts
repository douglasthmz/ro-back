import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv';
import ICreateMembersListDTO from '@modules/member/DTOs/ICreateMembersListDTO';
import AppError from '@shared/errors/AppErrors';

const ValidateMemberListJSON = (MembersListSchema: ICreateMembersListDTO) => (
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
export default ValidateMemberListJSON;
