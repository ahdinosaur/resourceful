const { reducer: formReducer } = require('redux-form')
const { concat, combine } = require('redux-fp')

module.exports = concat(
  require('./resources/dux').updater,
  require('./search/updater'),
  combine({
    form: action => state => formReducer(state, action)
  })
)
