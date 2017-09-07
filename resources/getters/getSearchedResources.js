const { createSelector } = require('reselect')
const { pipe, any, toPairs, pickBy } = require('ramda')

const getResources = require('./getResources')
const getSearchParams = require('../../search/getters/getSearchParams')

module.exports = createSelector(
  getResources,
  getSearchParams,
  (resources, searchParams) => {
    const hasAnyMatches = pipe(
      toPairs,
      any(([key, value]) => {
        if (searchParams[key]) {
          return isFuzzyMatch(searchParams[key], value)
        } else return false
      })
    )
    const searchResources = pickBy((value, key) => {
      return hasAnyMatches(value)
    })
    return searchResources(resources)
  }
)

function isFuzzyMatch (matcher, value) {
  return new RegExp(matcher, 'i').test(value)
}
