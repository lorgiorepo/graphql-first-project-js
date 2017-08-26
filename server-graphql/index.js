const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const schema = require('./schema');

const app = express();

app.use(
    '/graphql', 
    bodyParser.json(), 
    graphqlExpress({
        schema
    })
);

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
)

const PORT = 5678;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${PORT}`)
});
