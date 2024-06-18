const { createStore } = require('redux');

const initialState = {
  count: 0,
};

// Action == คนที่ทำให้เกิดการเปลี่ยนแปลง state
// Action == Object

//## Refactor-2 ActionType Const
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY = 'INCREMENT_BY';

// ## Refactor-3 : Action Creator => replace Action Object

// const increaseAction = { type: INCREMENT };
// const decreaseAction = { type: DECREMENT };
// const resetAction = { type: RESET };

function increaseAction() {
  return { type: INCREMENT };
}
function decreaseAction() {
  return { type: DECREMENT };
}
function resetAction() {
  return { type: RESET };
}

function increaseByAction(by) {
  return { type: INCREMENT_BY, payload: by };
}

// Reducer == พนักงาน (อัพเดท State) นั่งอยู่ใน Store
// Reducer == FN

const counterReducer = (state = initialState, action) => {
  // ## Refactor-1 : if-else => Switch
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENT_BY:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};

// Store == ศูนย์กลางของระบบ / ที่เก็บ State
// Store == Object ที่มี Method (dispatch, subscribe, getState)

const store = createStore(counterReducer); // call Reducer 1 ครั้ง

// ###### IMPLEMENTATION

// let state = store.getState();
// console.log(state);

store.subscribe(() => {
  // Run Every State Change
  let state = store.getState();
  console.log(state);
});

store.dispatch(increaseAction());
store.dispatch(increaseAction());
store.dispatch(increaseAction());
store.dispatch(decreaseAction());
store.dispatch(resetAction());
store.dispatch(increaseByAction(21));
store.dispatch(increaseByAction(21));
store.dispatch({ type: INCREMENT_BY, payload: 21 });
