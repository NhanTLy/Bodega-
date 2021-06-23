// consolidate schemas

const { gql } = require('apollo-server-express');
const pantryType = require('./pantry');
const shoppingType = require('./shopping');

const rootType = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

module.exports = [rootType, pantryType, shoppingType];