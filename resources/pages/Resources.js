const h = require('react-hyperscript')
const { compose, withState } = require('recompose')
const { connect: connectFeathers } = require('feathers-action-react')
const { tap, pipe, values, map, toPairs, filter, fromPairs, isNil, apply, assoc, __, not, prop } = require('ramda')

const getResourcesPageProps = require('../getters/getResourcesPageProps')
const resourcesActions = require('../dux').actions

const ResourceSearch = require('../components/ResourceSearch')
const ResourceEditor = require('../components/ResourceEditor')
const ResourceViewer = require('../components/ResourceViewer')

module.exports = compose(
  withState('params', 'setParams', {}),
  connectFeathers({
    selector: getResourcesPageProps,
    actions: {
      resources: resourcesActions
    },
    query: ({ params }) => [
      {
        service: 'resources',
        params: {
          query: paramsToQuery(params)
        }
      }
    ],
    shouldQueryAgain: (props, status, prevProps) => {
      return (props.params !== prevProps.params) 
    }
  })
)(props => {
  const { resources, setParams, searchedResources, actions } = props
  return h('div', [
    h(ResourceSearch, {
      resources,
      onSubmit: (data) => setParams(data)
    }),
    h(ResourceEditor, {
      resources,
      onSubmit: actions.resources.create
    }),
    viewResources(searchedResources)
  ])
})

const filterEmptyValues = pipe(
  toPairs,
  filter(pipe(
    prop(1),
    isNil,
    not
  )),
  fromPairs
)

const toSinglePairs = pipe(
  toPairs,
  map(apply(assoc(__, __, {})))
)

const paramsToQuery = pipe(
  tap(console.log.bind(console)),
  filterEmptyValues,
  tap(console.log.bind(console)),
  toSinglePairs,
  tap(console.log.bind(console)),
  assoc('fuzzyMatch', __, {}),
  tap(console.log.bind(console))
)

const viewResources = pipe(
  values,
  map(resource => (
    h(ResourceViewer, {
      key: resource.id,
      resource
    })
  ))
)
