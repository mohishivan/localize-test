import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { LanguageReducer } from '../modules/languages/reducer'
import { sagas } from './sagas'


const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ];

const reducers = combineReducers({
  languages: LanguageReducer,
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = () => {

  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
      reducers,
      {},
      composeEnhancers(
        applyMiddleware(...middleware)
      )
  )

  sagaMiddleware.run(sagas)
  
  return store
}

export type AppState  = ReturnType<typeof reducers>
const store = configureStore() 
export default store
