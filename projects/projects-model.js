const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
    .where({ id: id})
    .first()
}

function add(project){
    return db('projects')
    .insert(project)
        .then(([id]) => {
            return findById(id)
        })
}

