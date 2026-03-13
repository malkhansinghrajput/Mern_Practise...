// import { configureStore } from "@reduxjs/toolkit";
// import BankSlices from './BankSlice'

// export const Store = configureStore({
//     reducer: {
//         bank: BankSlices
//     },
// })

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import BankSlices from "./BankSlice";

const persistConfig= {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  bank: BankSlices,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store)
export { store, persistor }