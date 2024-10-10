import countReducer from "./CountSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: countReducer,
    }
});

export default store;
