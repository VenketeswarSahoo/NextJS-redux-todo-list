const { createStore } = require("redux");
const { default: rootReducer } = require("./reducers");

let store;

if (typeof window !== "undefined") {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(rootReducer);
}

export default store;
