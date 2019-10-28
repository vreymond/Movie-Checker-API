const express = require('express');
const mongoose = require('mongoose');
const graphqlHttp= require('express-graphql');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();

// const logger = require('./utils/logger');
const auth = require('./middleware/auth');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

const PORT = process.env.PORT_API || 3000;
const mongoAddress = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER_NAME}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
// Setting various Http headers for security
app.use(helmet());

// Prevent CORS (Cross-Oririn Resources Sharing) errors. '*' access to any client
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(auth);

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
        if (!err.originalError) {
            return err;
        }
        const data = err.originalError.data;
        const message = err.message || 'An error occured.';
        const code = err.originalError.code || 500;
        return { message: message, status: code, data: data }
    }
}));

mongoose.connect(
    mongoAddress, 
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(PORT);
        console.log('Connected on port:', PORT)
    })
    .catch(err => {
        console.log(err);
    })
