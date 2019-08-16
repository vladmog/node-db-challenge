
exports.up = function(knex) {
    return knex.schema

    //Projects table
    .createTable('projects', tbl => {
        tbl.increments();
        tbl
            .string('project_name', 255)
            .notNullable()
            .unique();
        tbl
            .string('project_description', 255)
        tbl 
            .bool('project_completed')
            .notNullable()
    })

    //Resources table
    .createTable('resources', tbl => {
        tbl.increments();
        tbl
            .string('resource_name', 255)
            .notNullable()
            .unique();
        tbl
            .string('resource_description', 255)
    })

    //Tasks table
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .string('task_description', 255)
            .notNullable()
            .unique();
        tbl
            .string('task_notes', 255)
        tbl 
            .bool('task_completed')
            .notNullable()
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    

    //Project resources table
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl 
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
