import { useAppDispatch } from 'redux/hooks/hooks';
import { deleteContactThunk } from 'redux/contacts/contacts.thunk';

import css from './ContactItem.module.css';
import { IContact } from 'types/contactType';

export const ContactItem = ({ name, phone, id }: IContact) => {
  const dispatch = useAppDispatch();
  const handleDelete = (): void => {
    dispatch(deleteContactThunk(id));
  };
  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
