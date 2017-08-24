const h = require('react-hyperscript')
const { map } = require('ramda')
const { Route, Switch } = require('react-router-dom')

module.exports = (props) => {
  const { routes } = props
  return h('div', [
    h(Switch, [
      mapRoutePages(routes)
    ])
  ])
}

const mapRoutePages = map(route => {
  const {
    path,
    exact,
    component
  } = route

  const key = path || '404'

  return h(Route, {
    key,
    path,
    exact,
    component
  })
})
