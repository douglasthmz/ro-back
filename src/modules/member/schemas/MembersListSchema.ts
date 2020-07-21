import ICreateMembersListDTO from '../DTOs/ICreateMembersListDTO';

const MembersListSchema: ICreateMembersListDTO = {
  title: 'Members List Schema',
  required: ['dtv_1'],
  properties: {
    dtv_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
        },
        full_name: {
          type: 'string',
        },
      },
    },
  },
};

export default MembersListSchema;
