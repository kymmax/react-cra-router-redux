import { configureStore } from "@reduxjs/toolkit";

import messageReducer from './slice/messageSlice';
import cartReducer from './slice/cartSlice';
import loadingReducer from "./slice/loadingSlice";

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        message: messageReducer,
        cart: cartReducer,
    }
})