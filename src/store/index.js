import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux'

import authReducer from './auth/reducer'
import postReducer from './post/reducer'

const rootReducer = combineReducers({
  Post: postReducer,
  Auth: authReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store