import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contacts.thunk';
import { IContact } from 'types/contactType';

interface IState {
  items: IContact[];
  isLoading: boolean;
  error: unknown | null;
}

const initialState: IState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        fetchContactsThunk.fulfilled,
        (state, { payload }: PayloadAction<IContact[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = payload;
        }
      )
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        addContactThunk.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(payload);
        }
      )
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteContactThunk.fulfilled,
        (state, { payload }: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          state.items = state.items.filter(({ id }) => id !== payload.id);
        }
      )
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
