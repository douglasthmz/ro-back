import { container } from 'tsyringe';

import '@modules/admin/providers';

import IAdminsRepository from '@modules/admin/repositories/IAdminsRepository';
import AdminsRepository from '@modules/admin/infra/typeorm/repositories/AdminsRepository';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import RolesRepository from '@modules/roles/infra/typeorm/repositories/RolesRepository';

container.registerSingleton<IAdminsRepository>(
  'AdminsRepository',
  AdminsRepository,
);

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
);
