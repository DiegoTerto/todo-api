import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'To-do API Project',
        description: 'API REST para to-do'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: ''
        },
    ],
    components: {
      schemas: {
          CreateCategory: {
              type: 'object',
              properties: {
                  name: 'string',
                  cor: 'string'
              }
          }
      }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);