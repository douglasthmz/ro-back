import Report from '../infra/typeorm/entities/Report';

export default interface IReportsRepository {
  findById(id: string): Promise<Report | undefined>;
  create(exibition_id: string): Promise<Report>;
  save(exibition: Report): Promise<Report>;
  remove(id: string): Promise<void>;
}
