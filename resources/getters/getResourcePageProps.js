const { createStructuredSelector } = require('reselect')

const getCurrentResource = require('./getCurrentResource')
const getResources = require('./getResources')

module.exports = createStructuredSelector({
  resource: getCurrentResource,
  resources: getResources
})
