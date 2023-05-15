import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';

import css from './ContactList.module.css';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectFilterContacts);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <h2>ERROR</h2>}
      {!isLoading && !error && (
        <ul className={css.list}>
          {contacts.map(({ id, name, phone }) => (
            <li key={id} className={css.item}>
              <ContactItem name={name} phone={phone} id={id} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
