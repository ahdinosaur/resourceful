const Rx = require('rxjs')
const { combineEpics } = require('redux-observable')

module.exports = combineEpics(
  require('./resources/dux').epic
)
