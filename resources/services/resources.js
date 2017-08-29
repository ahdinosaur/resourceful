const { is, isEmpty } = require('ramda')
const feathersKnex = require('feathers-knex')

const isArray = is(Array)

module.exports = function () {
  const app = this
  const db = app.get('db')

  const name = 'resources'
  const options = { Model: db, name }

  app.use(name, feathersKnex(options))
  app.service(name).hooks(hooks)
}

const hooks = {
  before: {
    find: [
      queryFuzzyMatch
    ]
  },
  after: {},
  error: {}
}

const fuzzyMatchKeys = ['name', 'description']

function queryFuzzyMatch (hook) {
  var { query } = hook.params
  const { fuzzyMatch } = query
  delete query.fuzzyMatch

  if (isEmpty(fuzzyMatch)) return hook

  var knex = hook.service.createQuery(query)

  knex.where(function () {
    const fuzzyMatchOrs = isArray(fuzzyMatch) ? fuzzyMatch : [fuzzyMatch]
    fuzzyMatchOrs.forEach(fuzzyMatchAnd => {
      this.where(function () {
        Object.keys(fuzzyMatchAnd).forEach(key => {
          if (!fuzzyMatchKeys.includes(key)) {
            throw new Error(`Cannot fuzzy match key: ${key}`)
          }
          const match = fuzzyMatchAnd[key]
          // TODO use a proper knex escape for key
          this.whereRaw(`"${key}" ~* ?`, match)
        })
      })
    })
  })

  hook.params.knex = knex

  return hook
}
