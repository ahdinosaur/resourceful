const { createSelector } = require('reselect')

const getResourcesState = require('./getResourcesState')

module.exports = createSelector(
  getResourcesState,
  (resources) => resources
)
