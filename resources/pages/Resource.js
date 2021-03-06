const h = require('react-hyperscript')
const { compose } = require('recompose')
const { connect: connectFeathers } = require('feathers-action-react')
const { isNil } = require('ramda')

const getResourcePageProps = require('../getters/getResourcePageProps')
const resourcesActions = require('../dux').actions

const ResourceEditor = require('../components/ResourceEditor')

module.exports = compose(
  connectFeathers({
    selector: getResourcePageProps,
    actions: {
      resources: resourcesActions
    },
    query: (props) => [
      {
        service: 'resources',
        id: props.match.resourceId,
        params: {},
      },
      {
        service: 'resources',
        params: {}
      }
    ]
  })
)(props => {
  const { resource, resources, actions } = props
  if (isNil(resource)) return null
  return h('div', [
    h(ResourceEditor, {
      resource,
      resources,
      onSubmit: (nextResource) => {
        actions.resources.update(resource.id, nextResource)
      }
    })
  ])
})
