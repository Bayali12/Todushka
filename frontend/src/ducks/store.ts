import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducers from './reducers';

const composeEnhancers = composeWithDevTools({
  name: 'todoApp',
});

const store = createStore(todoReducers, composeEnhancers(applyMiddleware()));

export default store;
