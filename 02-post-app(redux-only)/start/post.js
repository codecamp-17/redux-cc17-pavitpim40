const { createStore } = require('redux');

// Reducer : FN
const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
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

store.dispatch({ type: 'CREATE_POST', payload: { id: 1, title: 'Hot News', body: 'Task-in' } });
store.dispatch({
  type: 'CREATE_POST',
  payload: { id: 2, title: 'Sport News', body: 'Spain-Croatia : 3-0' },
});

store.dispatch({ type: 'DELETE_POST', payload: 1 });
store.dispatch({ type: 'DELETE_POST', payload: 2 });
