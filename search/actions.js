const createAction = require('@f/create-action')

const setParams = createAction(
  'SEARCH_SET_PARAMS',
  (cid, payload) => payload,
  (cid) => ({ cid })
)

module.exports = {
  setParams
}
