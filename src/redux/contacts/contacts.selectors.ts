import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { selectFilter } from 'redux/filter/filter.selectors';

export const selectItems = (state: RootState) => state.contacts.items;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
