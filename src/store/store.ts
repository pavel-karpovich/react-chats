import { createStore } from 'redux';
import rootReducer from './reducers';

const anyWindow = window as any;
const composeEnhancers = anyWindow.__REDUX_DEVTOOLS_EXTENSION__ && anyWindow.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, composeEnhancers);
