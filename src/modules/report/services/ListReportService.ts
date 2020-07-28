import { injectable, inject } from 'tsyringe';
import IReportsRepository from '../repositories/IReportsRepository';
import Report from '../infra/typeorm/entities/Report';

@injectable()
class ListAllReportsService {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,
  ) {}

  public async execute(exibition_id: string): Promise<Report | undefined> {
    const reports = await this.reportsRepository.find(exibition_id);
    return reports;
  }
}

export default ListAllReportsService;
