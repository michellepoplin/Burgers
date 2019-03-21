const connection = require('../config/connection');

let orm = {
    selectAll: cb => {
        let query = 'SELECT * FROM burgers';
        connection.query(query, (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: (name, cb) => {
        let query = 'INSERT INTO burgers (name, devoured) VALUES (?, false)';
        connection.query(query, name, (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: (id, cb) => {
        let query = 'UPDATE burgers SET devoured = true WHERE id = ?';
        connection.query(query, id, (error, result) => {
            if (error) throw error;
            cb(result);
        });
    },
};

module.exports = orm;
