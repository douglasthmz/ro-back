import { JSONSchema7 } from 'json-schema';

const MembersListSchema: JSONSchema7 = {
  title: 'Members List Schema',
  required: [
    'dtv_1',
    'coordenador_tj',
    'coordenador_externa_1',
    'sonoplasta_1',
    'tecSis_1',
    'editorImagem_1',
    'liderTecnologia',
    'produtorTecnologia',
  ],
  properties: {
    dtv_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    dtv_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    coordenadorTj: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    coordenadorExterna_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    coordenadorExterna_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    assistenteProdução_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    assistenteProdução_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    sonoplasta_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    sonoplasta_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    tecSis_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    tecSis_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    tecSis_3: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    editorImagem_1: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    editorImagem_2: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    liderTecnologia: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    produtorTecnologia: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
    editorChefe: {
      type: 'object',
      required: ['role_id', 'full_name'],
      properties: {
        role_id: {
          type: 'string',
          format: 'uuid',
        },
        full_name: {
          type: 'string',
        },
      },
    },
  },
};

export default MembersListSchema;
