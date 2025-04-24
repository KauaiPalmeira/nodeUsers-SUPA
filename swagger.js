const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API de Usuários',
        description: 'API para gerenciar usuários',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/userRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js');
});
