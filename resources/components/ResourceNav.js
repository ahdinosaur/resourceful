const h = require('react-hyperscript')
const { compose } = require('recompose')
const { map } = require('ramda')
const { connect: connectFela } = require('react-fela')
const { Link } = require('react-router-dom')

const styles = require('../styles/ResourceNav')

const ResourceNav = compose(
  connectFela(styles)
)(props => {
  const { styles, resources } = props

  const renderResourceLinks = map(resource => {
    const { id, name } = resource
    return h(Link, {
      to: `/r/${id}`
    }, [
      h('div', {
        className: styles.name
      }, [
        name
      ])
    ])
  })

  return h('div', {
    className: styles.container
  }, [
    renderResourceLinks(resources)
  ])
})

module.exports = ResourceNav
