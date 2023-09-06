import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import capsuleReducer from "./Capsule/capsule.reducer";
import userReducer from "./Auth/userReducer"; // Import your userReducer

const rootReducer = combineReducers({
  capsule: capsuleReducer,
  user: userReducer, // Include the userReducer in the combined reducers
  // ... other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
