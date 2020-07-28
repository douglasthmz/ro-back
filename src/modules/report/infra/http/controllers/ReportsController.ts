import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateReportService from '@modules/report/services/UpdateReportService';
import CreateReportService from '@modules/report/services/CreateReportService';
import ListReportService from '@modules/report/services/ListReportService';

export default class ReportsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateReport = container.resolve(UpdateReportService);

    const report = await updateReport.execute({ id });

    return response.json(report);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getReports = container.resolve(ListReportService);

    const reports = await getReports.execute(id);

    return response.json(reports);
  }

  public async test(request: Request, response: Response): Promise<Response> {
    const { exibition_id } = request.body;

    const createReport = container.resolve(CreateReportService);

    const report = await createReport.execute(exibition_id);

    return response.json(report);
  }
}
