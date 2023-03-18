import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'components/redux/contactSlise';
import { getContacts } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};
