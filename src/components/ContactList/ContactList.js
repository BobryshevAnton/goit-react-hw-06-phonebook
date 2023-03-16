import css from './contactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'components/redux/actions';
//

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(elem => (
        <li key={elem.id} className={css.contactItem}>
          &#8226;{elem.name}: {elem.number}
          <button
            type="button"
            className={css.contactButton}
            onClick={() => {
              dispatch(deleteContacts(elem.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
