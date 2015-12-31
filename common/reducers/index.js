import { combineReducers } from 'redux'
import counter from './counter'
import active from './active'

const rootReducer = combineReducers({
  counter,
  active,
})

export default rootReducer
