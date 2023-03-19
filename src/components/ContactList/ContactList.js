import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'components/redux/contactSlise';
import { getContacts } from 'components/redux/selectors';
import { getFilter } from 'components/redux/selectors';
//

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  let filterContact = contacts.filter(elem =>
    elem.name.toLowerCase().includes(filter.filter)
  );
  console.log(filterContact);
  return (
    <>
      <ul className={css.contactList}>
        {filterContact.map(elem => (
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
