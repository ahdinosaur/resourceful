
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', table => {
    table.increments('id')
    // table.integer('resourceTypeId').references('resourceTypes.id')
    table.string('name')
    table.text('description')
    table.text('image')
    table.integer('containedByResourceId').references('resources.id')
    // categories (https://www.w3.org/2009/08/skos-reference/skos.html)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfNotExists('resources')
}

/*

exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('resourceTypes', table => {
    table.increments('id')
    table.string('name')
    table.text('description')
    table.text('image')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfNotExists('resourceTypes')
}

*/
