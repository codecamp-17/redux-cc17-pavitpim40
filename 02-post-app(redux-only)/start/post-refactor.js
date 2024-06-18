const { createStore } = require('redux');

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
const store = createStore(postReducer);

// Implement
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPostAction({ id: 1, title: 'Hot News', body: 'Task-in' }));
store.dispatch(createPostAction({ id: 2, title: 'Sport News', body: 'Spain-Croatia : 3-0' }));

store.dispatch(deletePostAction(2));
store.dispatch(deletePostAction(1));
