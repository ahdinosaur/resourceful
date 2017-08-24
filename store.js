// store.js
const updater = require('./updater')
const epic = require('./epic')

const middlewares = []
const enhancers = []

module.exports = {
  updater,
  epic,
  middlewares,
  enhancers
}
