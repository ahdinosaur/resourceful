const { createSelector } = require('reselect')
const { pipe, values, filter, prop, isNil } = require('ramda')

const getResources = require('./getResources')

module.exports = createSelector(
  getResources,
  pipe(
    values,
    filter(pipe(
      prop('containedByResourceId'),
      isNil
    ))
  )
)
