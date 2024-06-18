import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { noteReducer } from './reducers/note-reducer';

const store = createStore(noteReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
