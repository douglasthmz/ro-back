import { container } from 'tsyringe';

import '@modules/admin/providers';

import IAdminsRepository from '@modules/admin/repositories/IAdminsRepository';
import AdminsRepository from '@modules/admin/infra/typeorm/repositories/AdminsRepository';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import RolesRepository from '@modules/roles/infra/typeorm/repositories/RolesRepository';
import FailureOriginRepository from '@modules/failureOrigin/infra/typeorm/repositories/FailureOriginRepository';
import IFailureOriginRepository from '@modules/failureOrigin/repositories/IFailureOriginRepository';

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
