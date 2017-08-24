const { createStructuredSelector } = require('reselect')

const getResources = require('./getResources')

module.exports = createStructuredSelector({
  resources: getResources
})
