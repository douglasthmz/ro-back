import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import IReportsRepository from '../repositories/IReportsRepository';
import Report from '../infra/typeorm/entities/Report';

interface IRequestData {
  id: string;
}

@injectable()
class UpdateReportService {
  constructor(
    @inject('ReportsRepository')
    private reportsRepository: IReportsRepository,
  ) {}

  public async execute({ id }: IRequestData): Promise<Report> {
    const report = await this.reportsRepository.findById(id);

    if (!report) {
      throw new AppError('Report not found');
    }

    // if (!report.memberlist_id) {
    //   throw new AppError('Cannot finish the report before create member list');
    // }
    report.report_finished = true;

    const savedReport = await this.reportsRepository.save(report);
    return savedReport;
  }
}

export default UpdateReportService;
