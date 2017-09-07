const { createSelector } = require('reselect')
const { map, merge } = require('ramda')

const getResourcesState = require('./getResourcesState')
const getResourcesByContainerResourceId = require('./getResourcesByContainerResourceId')

module.exports = createSelector(
  getResourcesState,
  getResourcesByContainerResourceId,
  (resources, resourcesByContainerResourceId) => {
    const mapResources = map(resource => merge(resource, {
      contains: resourcesByContainerResourceId[resource.id] || []
    }))
    return mapResources(resources)
  }
)
