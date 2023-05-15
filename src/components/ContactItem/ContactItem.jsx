import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts.thunk';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
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
