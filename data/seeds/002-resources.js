
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, resource_name: 'Flimmy', resource_description: 'Flimsier than Jimmy'},
    {id: 2, resource_name: 'Jimmy', resource_description: 'Jimlier than Timmy'},
    {id: 3, resource_name: 'Timmy', resource_description: 'Timmier than Flimmy and Jimmy'},
  ]);
};
