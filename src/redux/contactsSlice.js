import { createSlice } from "@reduxjs/toolkit";
import contactsArr from "../data/contacts.json";

const initialState = {
  items: contactsArr,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { selectContacts } = slice.selectors;
export const { addContact, deleteContact } = slice.actions;
