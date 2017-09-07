const { createSelector } = require('reselect')
const { pipe, values, groupBy, prop } = require('ramda')

const getResourcesState = require('./getResourcesState')

module.exports = createSelector(
  getResourcesState,
  pipe(
    values,
    groupBy(prop('containedByResourceId'))
  )
)
