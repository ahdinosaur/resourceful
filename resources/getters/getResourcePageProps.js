const { createStructuredSelector } = require('reselect')

const getCurrentResource = require('./getCurrentResource')
const getResources = require('./getResources')
const getSearchedResources = require('./getSearchedResources')

module.exports = createStructuredSelector({
  resource: getCurrentResource,
  resources: getResources,
  searchedResources: getSearchedResources
})
