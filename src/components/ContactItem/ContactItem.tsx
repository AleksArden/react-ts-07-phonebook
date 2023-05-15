import { useAppDispatch } from 'redux/hooks/hooks';
import { deleteContactThunk } from 'redux/contacts/contacts.thunk';
import PropTypes from 'prop-types';

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
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
