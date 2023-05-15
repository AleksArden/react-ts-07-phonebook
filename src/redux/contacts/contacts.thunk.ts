import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const contactsApi = axios.create({
    baseURL: "https://63e4ff1ac04baebbcdb10925.mockapi.io",
})

export const fetchContactsThunk = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await contactsApi.get("/contacts");
        return data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})

export const addContactThunk = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const { data } = await contactsApi.post("/contacts", contact);
        return data
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})
export const deleteContactThunk = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const { data } = await contactsApi.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})