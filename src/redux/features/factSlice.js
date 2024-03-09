import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFact = createAsyncThunk(
  'fact/fetchFact',
  async (mode, { getState }) => {
    const { language } = getState().fact;
    let url = '';
    if (mode === 'today') {
      url = `https://uselessfacts.jsph.pl/api/v2/facts/today?language=${language}`;
    } else if (mode === 'random') {
      url = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`;
    }
    const response = await axios.get(url);
    return response.data;
  }
);

export const factSlice = createSlice({
  name: 'fact',
  initialState: {
    fact: null,
    language: 'en',
    loading: false,
    error: null,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFact.fulfilled, (state, action) => {
        state.fact = action.payload;
        state.loading = false;
      })
      .addCase(fetchFact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLanguage } = factSlice.actions;

export default factSlice.reducer;
