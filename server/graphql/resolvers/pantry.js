const pantrySubmit = require('../../controllers/pantryControllers/pantrySubmit');
const db = require('../../db');

const pantryResolvers = {
    Query: {
        async getPantryItems(parent, args, context) {
            try {
                const queryStr = `SELECT * FROM pantry WHERE user_id = $1;`;
                const result = await db.query(queryStr, [1]);
                return result.rows;
            }
            catch(err) {
                console.log('error in pantry resolver: getPantryItems: ', err);
                return [];
            }
        }
    },

    Mutation: {
        async pantrySubmit(_, args) {
            const { item_name, note, unit, qty, category, par } = args;
            if (qty === 'null') qty = 0;
            try {
                const insert = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category, par)
                                VALUES ($1, $2, $3, $4, $5, $6, $7);`;
                const values = [userId, item_name, note, unit, qty, category, par];
                await db.query(insert, values);
                return { success: true, message: 'Successful Pantry Submit' }
            }
            catch(err) {
                console.log('error in pantry resolver: pantrySubmit: ', err);
                return { success: false, message: 'Failed Pantry Submit' }
            }
        },

        
    }
}

module.exports = pantryResolvers;