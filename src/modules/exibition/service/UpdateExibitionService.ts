import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErrors';
import Admin from '@modules/admin/infra/typeorm/entities/Admin';
import IExibitionsRepository from '../repositories/IExibitionsRepository';
import Exibition from '../infra/typeorm/entities/Exibition';
import IUpdateExibitionDTO from '../DTOs/IUpdateExibitionDTO';

@injectable()
class UpdateExibitionService {
  constructor(
    @inject('ExibitionsRepository')
    private exibitionsRepository: IExibitionsRepository,
  ) {}

  public async execute({
    id,
    admin_id,
    ready_time,
  }: IUpdateExibitionDTO): Promise<Exibition> {
    const exibition = await this.exibitionsRepository.findById(id);

    if (!exibition) {
      throw new AppError('exibition not found');
    }

    exibition.admin_id = admin_id;
    exibition.report_sent = true;
    if (ready_time) {
      exibition.ready_time = ready_time;
    }

    const savedExibition = await this.exibitionsRepository.save(exibition);
    await savedExibition.admin;
    delete (await savedExibition.admin).password;
    return savedExibition;
  }
}

export default UpdateExibitionService;
