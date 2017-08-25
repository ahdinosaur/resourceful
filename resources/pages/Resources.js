const h = require('react-hyperscript')
const { compose } = require('recompose')
const { connect: connectFeathers } = require('feathers-action-react')
const { pipe, values, map } = require('ramda')

const getResourcesPageProps = require('../getters/getResourcesPageProps')
const resourcesActions = require('../dux').actions

const ResourceSearch = require('../components/ResourceSearch')
const ResourceEditor = require('../components/ResourceEditor')
const ResourceViewer = require('../components/ResourceViewer')

module.exports = compose(
  connectFeathers({
    selector: getResourcesPageProps,
    actions: {
      resources: resourcesActions
    },
    query: [
      {
        service: 'resources',
        params: {}
      }
    ]
  })
)(props => {
  const { resources, actions } = props
  return h('div', [
    h(ResourceSearch, {
      resources
    }),
    h(ResourceEditor, {
      resources,
      onSubmit: actions.resources.create
    }),
    viewResources(resources)
  ])
})

const viewResources = pipe(
  values,
  map(resource => (
    h(ResourceViewer, {
      key: resource.id,
      resource
    })
  ))
)
