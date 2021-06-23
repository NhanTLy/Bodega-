const { gql } = require('apollo-server-express');

const pantrySchemas = gql`
    type PantryItem {
        _id: Int
        user_id: Int!
        item_name: String!
        note: String
        unit: String!
        qty: Int
        category: String
        par: Int
    }
    
    type SuccessResponse {
        success: Boolean!
        message: String
    }

    extend type Query {
        getPantryItems: [PantryItem!]
    }

    extend type Mutation {
        pantrySubmit (
            itemName: String!
            note: String
            unit: String
            qty: Int!
            category: String!
            par: Int!
        ) : SuccessResponse
        pantryUpdate (
            itemId: Int!
            itemName: String!
            note: String
            unit: String
            qty: Int!
            category: String!
            par: Int!
        ) : SuccessResponse
        pantryQtyUp(itemId: Int!) : SuccessResponse
        pantryQtyDown(itemId: Int!) : SuccessResponse
        pantryParUp(itemId: Int!) : SuccessResponse
        pantryParDown(itemId: Int!) : SuccessResponse
        pantryRemove(itemId: Int!) : SuccessResponse
`;

module.exports = pantrySchemas;