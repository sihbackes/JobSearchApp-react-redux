// import { configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";

// const store = configureStore({
//   reducer: mainReducer,
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/JobReducer";
import favoritesReducer from "../reducers/favorites";

const bigReducer = combineReducers({
  job: jobReducer,
  favorite: favoritesReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
