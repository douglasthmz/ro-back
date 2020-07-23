import { JSONSchema7 } from 'json-schema';

const MembersListSchema: JSONSchema7 = {
  title: 'Members List Schema',
  required: [
    'dtv_1',
    'coordenador_tj',
    'sonoplasta_1',
    'tecSis_1',
    'liderTecnologia',
    'produtorTecnologia',
  ],
  properties: {
    dtv_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    dtv_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    coordenadorTj: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    coordenadorExterna_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    coordenadorExterna_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    assistenteProdução_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    assistenteProdução_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    sonoplasta_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    sonoplasta_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    tecSis_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    tecSis_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    tecSis_3: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    editorImagem_1: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    editorImagem_2: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    liderTecnologia: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    produtorTecnologia: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
    editorChefe: {
      type: 'object',
      required: ['member_id'],
      properties: {
        member_id: {
          type: 'string',
          format: 'uuid',
        },
      },
    },
  },
};

export default MembersListSchema;
