import { injectable, inject } from 'tsyringe';
import IReportsRepository from '@modules/report/repositories/IReportsRepository';
import Report from '@modules/report/infra/typeorm/entities/Report';

@injectable()
class CreateReportService {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,
  ) {}

  public async execute(exibition_id: string): Promise<Report> {
    const reportInstance = await this.reportsRepository.create(exibition_id);

    return reportInstance;
  }
}

export default CreateReportService;
