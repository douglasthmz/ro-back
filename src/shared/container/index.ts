import { container } from 'tsyringe';

import '@modules/admin/providers';

import IAdminsRepository from '@modules/admin/repositories/IAdminsRepository';
import AdminsRepository from '@modules/admin/infra/typeorm/repositories/AdminsRepository';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import RolesRepository from '@modules/roles/infra/typeorm/repositories/RolesRepository';
import FailureOriginRepository from '@modules/failureOrigin/infra/typeorm/repositories/FailureOriginRepository';
import IFailureOriginRepository from '@modules/failureOrigin/repositories/IFailureOriginRepository';
import IProductsRepository from '@modules/product/repositories/IProductsRepository';
import ProductsRepository from '@modules/product/infra/typeorm/repositories/ProductsRepository';
import IMembersRepository from '@modules/member/repositories/IMembersRepository';
import MembersRepository from '@modules/member/infra/typeorm/repositories/MemberRepository';
import IMembersListRepository from '@modules/member/repositories/IMembersListRepository';
import MembersListRepository from '@modules/member/infra/typeorm/repositories/MembersListRepository';
import IExibitionsRepository from '@modules/exibition/repositories/IExibitionsRepository';
import ExibitionsRepository from '@modules/exibition/infra/typeorm/repositories/ExibitionsRepository';
import IReportsRepository from '@modules/report/repositories/IReportsRepository';
import ReportsRepository from '@modules/report/infra/typeorm/repositories/ReportsRepository';

container.registerSingleton<IAdminsRepository>(
  'AdminsRepository',
  AdminsRepository,
);

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
);

container.registerSingleton<IFailureOriginRepository>(
  'FailureOriginRepository',
  FailureOriginRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IMembersRepository>(
  'MembersRepository',
  MembersRepository,
);

container.registerSingleton<IMembersListRepository>(
  'MembersListRepository',
  MembersListRepository,
);

container.registerSingleton<IExibitionsRepository>(
  'ExibitionsRepository',
  ExibitionsRepository,
);

container.registerSingleton<IReportsRepository>(
  'ReportsRepository',
  ReportsRepository,
);
