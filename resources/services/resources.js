const feathersKnex = require('feathers-knex')

module.exports = function () {
  const app = this
  const db = app.get('db')

  const name = 'resources'
  const options = { Model: db, name }

  app.use(name, feathersKnex(options))
  app.service(name).hooks(hooks)
}

const hooks = {
  before: {},
  after: {},
  error: {}
}
