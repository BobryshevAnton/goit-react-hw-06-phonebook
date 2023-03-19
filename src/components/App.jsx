import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './app.module.css';

const App = () => {
  return (
    <div className={css.form}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
