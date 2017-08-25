const { createStructuredSelector } = require('reselect')

const getCurrentResource = require('./getCurrentResource')

module.exports = createStructuredSelector({
  resource: getCurrentResource
})
