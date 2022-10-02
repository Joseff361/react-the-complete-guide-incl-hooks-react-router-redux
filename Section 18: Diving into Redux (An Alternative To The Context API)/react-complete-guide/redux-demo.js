const redux = require('redux');

/**
 * The reducer will be executed bt the Redux library
 * Should be a pure function
 * Inputs (This inputs are provided by Redux) => Old state + Dispatched action
 * Output => New state object (it can be a number, string or an OBJECT)
 */
const counterReducer = (state = { counter: 0 }, action) => {
  // state = { counter: 0 } => default parameter used only if we don't have an state yet (valid only for the first time)
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSuscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

/**
 * Suscribe method expects a function as a parameter
 */
store.subscribe(counterSuscriber);

store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' });
