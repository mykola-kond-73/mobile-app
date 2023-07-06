import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from './sagas/rootWatcher' 
import { errorReducer, photosReducer } from './reducers'

export const redusers = combineReducers({
    photos:photosReducer,
    errors:errorReducer
})

const sagaMiddleware=createSagaMiddleware()

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,  composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher)

export{
    store
}