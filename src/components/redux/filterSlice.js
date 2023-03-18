import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterContact(state, action) {
      console.log(state);
      return {
        contacts: state.contacts.filter(elem =>
          elem.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
