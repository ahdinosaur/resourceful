const { createStructuredSelector } = require('reselect')

const getResources = require('./getResources')
const getSearchParams = require('../../search/getters/getSearchParams')
const getTopResources = require('./getTopResources')
const getSearchedResources = require('./getSearchedResources')

module.exports = createStructuredSelector({
  resources: getResources,
  topResources: getTopResources,
  searchParams: getSearchParams,
  searchedResources: getSearchedResources
})
