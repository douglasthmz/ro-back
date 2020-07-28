import { container } from 'tsyringe';
import { addDays } from 'date-fns';
import CreateExibitionService from '@modules/exibition/service/CreateExibitionService';
import CreateReportService from '@modules/report/services/CreateReportService';
import ShowProductsService from '@modules/product/service/ShowProductsService';

const SetupSunday = async (): Promise<void> => {
  const showProducts = container.resolve(ShowProductsService);
  const createExibition = container.resolve(CreateExibitionService);
  const createReport = container.resolve(CreateReportService);

  const products = await showProducts.execute();

  const sundayProducts = products.filter(product =>
    product.exibition_days.includes(0),
  );

  await sundayProducts.forEach(async product => {
    const exibition = await createExibition.execute({
      product_id: product.id,
      exibition_date: addDays(new Date(), 2),
    });

    await createReport.execute(exibition.id);
  });
};

export default SetupSunday;
