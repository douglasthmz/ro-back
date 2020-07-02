import ICreateFailureOriginDTO from '@modules/failureOrigin/DTOs/ICreateFailureOriginDTO';
import FailureOrigin from '../infra/typeorm/entities/FailureOrigin';

export default interface IFailureOriginRepository {
  show(): Promise<FailureOrigin[]>;
  findById(id: string): Promise<FailureOrigin | undefined>;
  create(data: ICreateFailureOriginDTO): Promise<FailureOrigin>;
  remove(id: string): Promise<void>;
}
