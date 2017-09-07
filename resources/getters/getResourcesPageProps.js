const { createStructuredSelector } = require('reselect')

const getResources = require('./getResources')
const getSearchParams = require('../../search/getters/getSearchParams')
const getSearchedResources = require('./getSearchedResources')

module.exports = createStructuredSelector({
  resources: getResources,
  searchParams: getSearchParams,
  searchedResources: getSearchedResources
})
