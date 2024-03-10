import { createSlice } from '@reduxjs/toolkit';

const SAVED_ITEMS_KEY = 'savedItems';

const initialState = {
  items: [],
};

export const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    setSavedItems: (state, action) => {
      state.items = action.payload;
    },
    addSavedItem: (state, action) => {
      state.items = [action.payload, ...state.items];
      localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(state.items));
    },
    removeSavedItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(state.items)); 
    },
  },
});

export const {setSavedItems, addSavedItem, removeSavedItem } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
