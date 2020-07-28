import { container } from 'tsyringe';
import CreateExibitionService from '@modules/exibition/service/CreateExibitionService';
import CreateReportService from '@modules/report/services/CreateReportService';
import ShowProductsService from '@modules/product/service/ShowProductsService';

const SetupEveningAfter = async (): Promise<void> => {
  const showProducts = container.resolve(ShowProductsService);
  const createExibition = container.resolve(CreateExibitionService);
  const createReport = container.resolve(CreateReportService);

  const products = await showProducts.execute();

  const morningMidWeekProducts = products.filter(
    product =>
      product.exibition_days.includes(1 || 2 || 3 || 4 || 5) &&
      parseInt(product.initial_time, 10) >= 12,
  );

  await morningMidWeekProducts.forEach(async product => {
    const exibition = await createExibition.execute({
      product_id: product.id,
      exibition_date: new Date(),
    });

    await createReport.execute(exibition.id);
  });
};

export default SetupEveningAfter;
