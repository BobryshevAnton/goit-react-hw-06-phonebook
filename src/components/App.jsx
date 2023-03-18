import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { Modal } from './Modal/Modal';
import css from './app.module.css';

const App = () => {
  // //
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };
  // useEffect(() => {
  //   window.localStorage.setItem('phoneBook', JSON.stringify(contacts));
  // }, [contacts]);

  //   const inclCont = contacts.some(elem => elem.name === newContact.name);
  //   if (inclCont) {
  //     alert(`${newContact.name} already in contacts`);
  //     return;
  //   }
  //   setContacts([newContact, ...contacts]);
  // };

  return (
    <div className={css.form}>
      {/* <button
        type="button"
        className={css.form__button}
        // onClick={ toggleModal }
      >
        Form for new contact
      </button> */}
      {/* {showModal && (
        <Modal toggleModal={toggleModal}> */}
      <ContactForm />
      {/* </Modal>
      )} */}

      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
