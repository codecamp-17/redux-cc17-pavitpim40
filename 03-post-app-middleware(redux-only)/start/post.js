const { createStore, applyMiddleware } = require('redux');
const { createLogger } = require('redux-logger');

// Middleware Logger
const logger = createLogger({});

const myMiddleware = ({ getState }) => {
  console.log('State Before', getState());
  return (next) => {
    return (action) => {
      // Do something..
      console.log('Action Fire 🔥');
      action.payload = { id: 1, title: 'Fake News', body: 'Task-out' };
      next(action);
    };
  };
};

// Action Constant
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

// Action Creator
function createPostAction(post) {
  return { type: CREATE_POST, payload: post };
}

function deletePostAction(id) {
  return { type: DELETE_POST, payload: id };
}

// Reducer : FN
const postReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

// Store
const store = createStore(postReducer, applyMiddleware(logger, myMiddleware));

// Implement
// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(createPostAction({ id: 1, title: 'Hot News', body: 'Task-in' }));
// store.dispatch(createPostAction({ id: 2, title: 'Sport News', body: 'Spain-Croatia : 3-0' }));

// store.dispatch(deletePostAction(2));
// store.dispatch(deletePostAction(1));
