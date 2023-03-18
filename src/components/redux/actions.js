// import { nanoid } from 'nanoid';
// import { createAction } from '@reduxjs/toolkit';
// import { addContacts, deleteContacts, filterContact } from './contactSlise';

// export const addContacts = createAction(
//   'contacts/addContacts',
//   (name, number) => {
//     return {
//       type: 'contacts/addContacts',
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// );
// export const deleteContacts = createAction(
//   'contacts/deleteContacts',
//   contactId => {
//     return {
//       type: 'contacts/deleteContacts',
//       payload: contactId,
//     };
//   }
// );
// export const filterContact = createAction('filters/filterContact', value => {
//   return {
//     type: 'filters/filterContact',
//     payload: value,
//   };
// });

// //first facing part
// // export const addContacts =createAction('contacts/addContacts',name, number) => {
// //   return {
// //     type: 'contacts/addContacts',
// //     payload: {
// //       id: nanoid(),
// //       name,
// //       number,
// //     },
// //   };
// // };
// // export const deleteContacts = contactId => {
// //   return {
// //     type: 'contacts/deleteContacts',
// //     payload: contactId,
// //   };
// // };
// // export const filterContact = value => {
// //   return {
// //     type: 'filters/filterContact',
// //     payload: value,
// //   };
// // };
