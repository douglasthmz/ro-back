import { getRepository, Repository } from 'typeorm';
import IReportsRepository from '@modules/report/repositories/IReportsRepository';
import Report from '../entities/Report';

class ReportsRepository implements IReportsRepository {
  private ormRepository: Repository<Report>;

  constructor() {
    this.ormRepository = getRepository(Report);
  }

  public async findById(id: string): Promise<Report | undefined> {
    const report = this.ormRepository.findOne(id);

    return report;
  }

  public async create(exibition_id: string): Promise<Report> {
    const report = this.ormRepository.create({ exibition_id });

    await this.ormRepository.save(report);

    return report;
  }

  public async save(report: Report): Promise<Report> {
    return this.ormRepository.save(report);
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default ReportsRepository;
