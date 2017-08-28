const h = require('react-hyperscript')
const { reduxForm: connectForm, Field } = require('redux-form')
const { isNil, merge } = require('ramda')
const { connect: connectFela } = require('react-fela')
const { compose } = require('recompose')

const styles = require('../styles/ResourceSearch')

const ResourceSearch = compose(
  connectFela(styles),
  connectForm({
    form: 'resourceSearch'
  })
)(props => {
  const { styles, handleSubmit } = props

  return h('form', {
    className: styles.form,
    onSubmit: handleSubmit
  }, [
    h(Field, {
      name: 'name',
      type: 'text',
      component: 'input'
    }),
    h('button', {
      type: 'submit'
    }, [
      'search'
    ])
  ])
})

module.exports = ResourceSearch
