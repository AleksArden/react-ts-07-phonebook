import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactWithoutId, IContact } from 'types/contactType';

const contactsApi = axios.create({
  baseURL: 'https://646280ed7a9eead6fad0f8fe.mockapi.io',
});

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsApi.get('/contacts');
      return data as IContact[];
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact: ContactWithoutId, thunkAPI) => {
    try {
      const { data } = await contactsApi.post('/contacts', contact);
      return data as IContact;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id: string, thunkAPI) => {
    try {
      const { data } = await contactsApi.delete(`/contacts/${id}`);
      return data as IContact;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
