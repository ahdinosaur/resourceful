const { prop } = require('ramda')
const { createSelector } = require('reselect')

const getResources = require('./getResources')

const getCurrentResourceId = (state, props) => {
  return props.match.params.resourceId
}

const getCurrentResource = createSelector(
  getCurrentResourceId,
  getResources,
  prop
)

module.exports = getCurrentResource
