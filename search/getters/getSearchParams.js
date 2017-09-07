const { createSelector } = require('reselect')
const { prop } = require('ramda')

const getSearchState = require('./getSearchState')

module.exports = createSelector(
  getSearchState,
  prop('params')
)
