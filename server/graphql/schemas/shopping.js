const { gql } = require('apollo-server-express');

const shoppingSchemas = gql`
    type ShoppingItem {
        _id: Int
        user_id: Int!
        pantry_id: Int
        item_name: String!
        note: String
        unit: String!
        list_qty: Int!
        buy_qty: Int!
        category: String
        pantry_qty: Int
        pantry_par: Int
    }

    type SuccessResponse {
        success: Boolean!
        message: String
    }

    extend type Query {
        getShoppingItems: [ShoppingItem!]
        getItem(itemID: Int!): ShoppingItem
    }

    extend type Mutation {
        shoppingSubmit (
            itemName: String!
            note: String
            unit: String
            category: String
            listQty: String!
        ) : SuccessResponse
        shoppingUpdate (
            itemId: Int!
            itemName: String!
            note: String
            unit: String
            category: String
            listQty: Int!
        ) : SuccessResponse
        shoppingBuyUp(itemId: Int!): SuccessResponse
        shoppingBuyDown(itemId: Int!): SuccessResponse
        shoppingListUp(itemId: Int!): SuccessResponse
        shoppingListDown(itemId: Int!): SuccessResponse
        shoppingRemove(itemId: Int!): SuccessResponse
        shoppingAddFromPantry(itemId: Int!, qty: Int, par: Int): SuccessResponse
        shoppingCheckout: SuccessResponse
    }
`;

module.exports = shoppingSchemas;