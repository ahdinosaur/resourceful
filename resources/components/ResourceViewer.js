const h = require('react-hyperscript')
const { compose } = require('recompose')
const {} = require('ramda')
const { connect: connectFela } = require('react-fela')
const { Link } = require('react-router-dom')

const styles = require('../styles/ResourceViewer')

const ResourceViewer = compose(
  connectFela(styles)
)(props => {
  const { styles, resource } = props
  const { name, description } = resource

  return h('div', {
    className: styles.container
  }, [
    h(Link, {
      to: `/r/${resource.id}`
    }, [
      h('div', {
        className: styles.name
      }, [
        name
      ])
    ])
  ])
})

module.exports = ResourceViewer
