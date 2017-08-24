const h = require('react-hyperscript')
const { reduxForm: connectForm, Field } = require('redux-form')
const { isNil, merge } = require('ramda')
const { connect: connectFela } = require('react-fela')
const { compose } = require('recompose')

const styles = require('../styles/ResourceEditor')

const ResourceEditor = props => {
  const { resource } = props
  const id = isNil(resource) ? 'tmp' : resource.id
  const nextProps = merge(props, {
    form: `resource-${id}`,
    initialValues: resource
  })
  return h(ResourceForm, nextProps)
}

module.exports = ResourceEditor

const ResourceForm = compose(
  connectFela(styles),
  connectForm({})
)(props => {
  const { styles, handleSubmit, resource } = props

  return h('form', {
    className: styles.form,
    onSubmit: handleSubmit
  }, [
    h('fieldset', [
      h('label', 'name'),
      h(Field, {
        name: 'name',
        type: 'text',
        component: 'input'
      }),
    ]),
    h('fieldset', [
      h('label', 'description'),
      h(Field, {
        name: 'description',
        component: 'textarea'
      })
    ]),
    h('button', {
      type: 'submit'
    }, [
      submitText(resource)
    ])
  ])
})

function submitText (resource) {
  return isNil(resource) ? 'create' : 'update'
}
