const h = require('react-hyperscript')
const { compose } = require('recompose')
const {} = require('ramda')
const { connect: connectFela } = require('react-fela')

const styles = require('../styles/ResourceViewer')

const ResourceViewer = compose(
  connectFela(styles)
)(props => {
  const { styles, resource } = props
  const { name, description } = resource

  return h('div', {
    className: styles.container
  }, [
    h('div', {
      className: styles.name
    }, [
      name
    ]),
    h('div', {
      className: styles.description
    }, [
      description
    ])
  ])
})

module.exports = ResourceViewer
