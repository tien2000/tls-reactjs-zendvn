import { createStore } from "redux";
import appReducers from "./reducers/index";
import { actCloseForm, actOpenForm, actToggleForm, actSort }     from "./actions/index";
        
// const store = createStore(appReducers);

const store = createStore(
    appReducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

console.log("Init: ", store.getState());

store.subscribe(() => 
    console.log(store.getState())
);

// CLOSE_FORM
store.dispatch(actCloseForm());
console.log("CLOSE_FORM: ", store.getState());

// TOGGLE_FORM
store.dispatch(actToggleForm());
console.log("TOGGLE_FORM: ", store.getState());

// OPEN_FORM
store.dispatch(actOpenForm());
console.log("OPEN_FORM: ", store.getState());

// CHANGE SORT
store.dispatch(actSort('level', 'desc'));
console.log("SORT_ITEM: ", store.getState());

export default store; 