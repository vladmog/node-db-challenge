
exports.seed = function(knex) {
  return knex('tasks').insert([
    {id: 1, task_description: 'clean interior', task_notes: 'no armor-all', task_completed: false, project_id: 1},
    {id: 2, task_description: 'clean exterior', task_notes: 'no swirlies', task_completed: false, project_id: 1},
    {id: 3, task_description: 'mop', task_notes: 'use spic n span', task_completed: false, project_id: 2},
    {id: 4, task_description: 'dust', task_notes: 'use swiffer', task_completed: false, project_id: 2},
  ]);
};
