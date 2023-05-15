import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filter {
  filter: string;
}

const initialState: filter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAction(state, { payload }: PayloadAction<string>) {
      state.filter = payload;
    },
  },
});

export const { filterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
