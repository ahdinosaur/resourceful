const { decorate, updateStateAt, withDefaultState, handleActions } = require('redux-fp')
const { pipe, prop, assoc } = require('ramda')

const { setParams } = require('./actions')

const updater = decorate(
  updateStateAt('search'),
  withDefaultState({
    params: {}
  }),
  handleActions({
    [setParams]: pipe(
      prop('payload'),
      assoc('params')
    )
  })
)

module.exports = updater
