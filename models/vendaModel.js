const db = require('../config/db');

const venda = {
    create: (venda, callback) => {
        const query = 'INSERT INTO vendas (id, vtotal, data_venda, usuario, produto, quantidade) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [id, vendas.vtotal, vendas.data_venda, vendas.usuario, vendas.produto, vendas.quantidade], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT vendas.*, vendas FROM vendas WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, vendas, callback) => {
        const query = 'UPDATE vendas SET vtotal = ?, data_venda = ?, usuario = ?, produto = ?, quantidade = ? WHERE id = ?';
        db.query(query, [id, vendas.vtotal, vendas.data_venda, vendas.usuario, vendas.produto, vendas.quantidade], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM vendas WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT id, vendas.vtotal, vendas.data_venda, vendas.usuario, vendas.produto, vendas.quantidade FROM vendas';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = venda;