// Needed for onTouchTap
// import injectTapEventPlugin from 'react-tap-event-plugin'
const injectTapEventPlugin = require('react-tap-event-plugin')
injectTapEventPlugin()

const h = require('react-hyperscript')

const Layout = (props) => {
  return h('div', 'hey!')
}

export default Layout
