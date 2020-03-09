const graphqlHttp = require('express-graphql');
const schema = require('./schema');
const makeVideoController = require('./video');
const storageService = require('../../services/storage');

const rootValue = makeVideoController(storageService);
const graphiql = true;

module.exports = graphqlHttp({ schema, rootValue, graphiql});