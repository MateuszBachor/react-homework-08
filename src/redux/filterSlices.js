import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, {payload}) =>
       payload
  },
});

export const { filterContacts } = filterSlice.actions;

export default filterSlice.reducer;