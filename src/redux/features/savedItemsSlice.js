import { createSlice } from '@reduxjs/toolkit';

export const savedItemsSlice = createSlice({
  name: 'savedItems',
  initialState: {
    items: [],
  },
  reducers: {
    addSavedItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeSavedItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addSavedItem, removeSavedItem } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
