import { INIT_REQUEST_DATA } from '../actions/active'

const initState = {
  pageData : [],
}

export default function active(active = initState, action) {
  switch (action.type) {
    case INIT_REQUEST_DATA:
      return Object.assign({}, active, {
        pageData : action.data,
      })
    default:
      return active
  }
}
