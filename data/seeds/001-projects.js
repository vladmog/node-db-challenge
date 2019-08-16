
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, project_name: 'clean car', project_description: 'spring cleaning', project_completed: false},
    {id: 2, project_name: 'clean house', project_description: 'winter cleaning', project_completed: false}
  ]);
};
