// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContacts, deleteContacts, filterContact } from './actions';

// const initialContacts = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
// const initialFilter = {
//   filter: '',
// };
// export const contactsReducer = createReducer(initialContacts, {
//   [addContacts]: (state, action) => {
//     return {
//       contacts: [...state.contacts, action.payload],
//     };
//   },
//   [deleteContacts]: (state, action) => {
//     return {
//       contacts: state.contacts.filter(contact => contact.id !== action.payload),
//     };
//   },
//   [filterContact]: (state, action) => {
//     return {
//       contacts: state.contacts.filter(elem =>
//         elem.name.toLowerCase().includes(action.payload.toLowerCase())
//       ),
//     };
//   },
// });

// //
// // чомусь не получилось через окремий фільтр редюсер!
// // я так думаю із-зa того, що в стейт попадає не контактс, а стейт фільтру.
// // як туди задати інший стейт?

// // export const filterReducer = createReducer(initialFilter, {
// //   [filterContact]: (state, action) => {
// //     return {
// //       contacts: state.contacts.filter(elem =>
// //         elem.name.toLowerCase().includes(action.payload.toLowerCase())
// //       ),
// //     };
// //   },
// // });
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   //   filters: filterReducer,
// });

// // export const contactsReducer = (state = initialContacts, action) => {
// //   switch (action.type) {
// //     case addContacts.type:
// //       return {
// //         contacts: [...state.contacts, action.payload],
// //       };
// //     case deleteContacts.type:
// //       return {
// //         contacts: state.contacts.filter(
// //           contact => contact.id !== action.payload
// //         ),
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const filterReducer = createReducer(initialFilter, {
// //   [filterContact]: (state, action) => {
// //     return {
// //       contacts: state.contacts.filter(elem =>
// //         elem.name.toLowerCase().includes(action.payload.toLowerCase())
// //       ),
// //     };
// //   },
// // });
// // export const filterReducer = (state = initialFilter, action) => {
// //   switch (action.type) {
// //     case filterContact.type:
// //       return {
// //         contacts: state.contacts.filter(elem =>
// //           elem.name.toLowerCase().includes(action.payload.toLowerCase())
// //         ),
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const rootReducer = combineReducers({
// //   contacts: contactsReducer,
// //   //   filters: filterReducer,
// // });
