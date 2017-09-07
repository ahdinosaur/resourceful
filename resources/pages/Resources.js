const h = require('react-hyperscript')
const { compose, withState } = require('recompose')
const { connect: connectFeathers } = require('feathers-action-react')
const { tap, pipe, values, map, toPairs, filter, fromPairs, isNil, apply, assoc, __, not, prop } = require('ramda')

const getResourcesPageProps = require('../getters/getResourcesPageProps')
const { resources: resourcesActions, search: searchActions } = require('../../actions')

const ResourceNav = require('../components/ResourceNav')
const ResourceEditor = require('../components/ResourceEditor')
const ResourceSearch = require('../components/ResourceSearch')
const ResourceViewer = require('../components/ResourceViewer')

module.exports = compose(
  connectFeathers({
    selector: getResourcesPageProps,
    actions: {
      resources: resourcesActions,
      search: searchActions
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
      const { searchParams } = props.selected
      const { searchParams: prevSearchParams } = prevProps.selected
      return searchParams !== prevSearchParams
    }
  })
)(props => {
  const { resources, topResources, searchedResources, actions } = props
  return h('div', [
    h(ResourceNav, {
      resources: topResources
    }),
    h(ResourceEditor, {
      resources,
      onSubmit: actions.resources.create
    }),
    h(ResourceSearch, {
      resources,
      onSubmit: (data) => actions.search.setParams(data)
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
  filterEmptyValues,
  toSinglePairs,
  assoc('fuzzyMatch', __, {})
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
