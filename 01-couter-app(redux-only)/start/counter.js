const { createStore } = require('redux');

const initialState = {
  count: 0,
};

// Action == คนที่ทำให้เกิดการเปลี่ยนแปลง state
// Action == Object

const increaseAction = { type: 'INCREMENT' };
const decreaseAction = { type: 'DECREMENT' };
const resetAction = { type: 'RESET' };

// Reducer == พนักงาน (อัพเดท State) นั่งอยู่ใน Store
// Reducer == FN

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    const newState = { ...state };
    newState.count += 1;
    return newState;
  } else if (action.type === 'DECREMENT') {
    const newState = { ...state };
    newState.count -= 1;
    return newState;
  } else if (action.type === 'RESET') {
    return { ...initialState };
  }
  return state;
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

store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });
// store.dispatch({ type: 'RESET' });

// store.dispatch(increaseAction);
// store.dispatch(increaseAction);
// store.dispatch(increaseAction);
// store.dispatch(decreaseAction);
// store.dispatch(resetAction);
