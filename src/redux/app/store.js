import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '../features/basketSlice';
import savedItemsReducer from '../features/savedItemsSlice';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import factReducer from '../features/factSlice';

export const store = configureStore({
      reducer: {
        user: userReducer,
        auth: authReducer,
        basket: basketReducer,
        savedItems: savedItemsReducer,
        fact: factReducer,
      },
    });
