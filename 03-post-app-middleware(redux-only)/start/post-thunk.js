const { createStore, applyMiddleware } = require('redux');
const { thunk } = require('redux-thunk');
const logger = require('redux-logger').default;
const axios = require('axios');

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Action Constant
const FETCH_POST_PENDING = 'FETCH_POST_PENDING';
const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

// Action Creator
function fetchPostPendingAction() {
  return { type: FETCH_POST_PENDING };
}

function fetchPostSuccessAction(posts) {
  return { type: FETCH_POST_SUCCESS, payload: posts };
}

function fetchPostErrorAction(error) {
  return { type: FETCH_POST_ERROR, payload: error };
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, error: null, posts: action.payload };
    case FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};

const rootMiddleware = applyMiddleware(thunk, logger);
const store = createStore(postReducer, rootMiddleware);

// IMPLEMENT

function fetchPostAPI() {
  return async (dispatch) => {
    // Step1
    dispatch(fetchPostPendingAction());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // Step2A
      dispatch(fetchPostSuccessAction(response.data.slice(0, 2)));
    } catch (error) {
      // Step2B
      dispatch(fetchPostErrorAction(error.message));
    }
  };
}

store.dispatch(fetchPostAPI());
// store.dispatch(plainObject)
