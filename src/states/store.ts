import { configureStore } from "@reduxjs/toolkit";
// it automatically sets up redux-dev-tools extension
// it automatically imports thunk middleware

export const store = configureStore({
    reducer: {}
    // instead of using combinedReducer function we simply pass our reducers object
    // configureStore automatically combines those reucers for us.
}) 