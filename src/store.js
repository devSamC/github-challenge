import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import repoReducer from './reducers/reducers'
const store = createStore(repoReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;