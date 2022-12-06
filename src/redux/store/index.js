import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobReducer from "../reducers/JobReducer";
import favoritesReducer from "../reducers/favorites";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const bigReducer = combineReducers({
  job: jobReducer,
  favorite: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
