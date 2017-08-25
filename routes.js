module.exports = [
  {
    path: '/',
    exact: true,
    component: require('./resources/pages/Resources')
  },
  {
    path: '/r/:resourceId',
    exact: true,
    component: require('./resources/pages/Resource')
  }
]
