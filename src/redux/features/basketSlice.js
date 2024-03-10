import { createSlice } from '@reduxjs/toolkit';

const BASKET_KEY = 'basket';

const initialState = {
  items: [],
};

if (typeof window !== 'undefined') {
  initialState.items = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [action.payload, ...state.items];
      localStorage.setItem(BASKET_KEY, JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem(BASKET_KEY, JSON.stringify(state.items));
    },
    clearItems: (state) => {
      state.items = [];
      localStorage.removeItem(BASKET_KEY);
    },
  },
});

export const { addItem, removeItem, clearItems } = basketSlice.actions;

export default basketSlice.reducer;
