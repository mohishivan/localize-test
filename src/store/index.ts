import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage';
import { LanguageReducer } from '../modules/languages/reducer'
import { sagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ];

const persistConfig = {
  key: 'root',
  storage: localForage,
  blacklist: ['languages']
}
const languagesConfig = {
  key: 'languages',
  storage: localForage,
  whitelist: ['list']
}

const reducers = combineReducers({
  languages: persistReducer(languagesConfig, LanguageReducer),
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = () => {

  
  const persistedReducer = persistReducer(persistConfig, reducers)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
      persistedReducer,
      {},
      composeEnhancers(
        applyMiddleware(...middleware)
      )
  )

  sagaMiddleware.run(sagas)
  
  const persistor = persistStore(store)
  return { store, persistor }
}

export type AppState  = ReturnType<typeof reducers>
export const {store, persistor} = configureStore() 
