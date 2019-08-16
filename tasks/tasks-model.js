const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    add
}

function find(){
    return db('tasks')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select(
            'tasks.task_description', 
            'tasks.task_notes', 
            'projects.project_name', 
            'projects.project_description', 
            'tasks.task_completed',
            'projects.project_completed')
}

function findById(id){
    return db('tasks')
    .where({ id: id})
    .first()
}

function add(project){
    return db('tasks')
    .insert(project)
        .then(([id]) => {
            return findById(id)
        })
}