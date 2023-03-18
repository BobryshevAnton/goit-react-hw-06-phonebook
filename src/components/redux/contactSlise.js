import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'tacontacts',
  initialState: initialContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        return {
          contacts: [...state.contacts, action.payload],
        };
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    // filterContact(state, action) {
    //   return {
    //     contacts: state.contacts.filter(elem =>
    //       elem.name.toLowerCase().includes(action.payload.toLowerCase())
    //     ),
    //   };
    // },
  },
});

export const {
  addContacts,
  deleteContacts,
  // filterContact
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
