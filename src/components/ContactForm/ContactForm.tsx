import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { selectItems } from 'redux/contacts/contacts.selectors';
import { addContactThunk } from 'redux/contacts/contacts.thunk';
import Notiflix from 'notiflix';

import css from './ContactForm.module.css';
import { ContactWithoutId } from 'types/contactType';

export const ContactForm = () => {
  const items = useAppSelector(selectItems);

  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const contact: ContactWithoutId = { name, phone: number };

    const hasSameName = items.some(contact => contact.name === name);

    hasSameName
      ? Notiflix.Notify.warning(`${name} is already in contacts`, {
          position: 'center-center',
          cssAnimationStyle: 'zoom',
        })
      : dispatch(addContactThunk(contact));

    hasSameName || setName('');
    hasSameName || setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className={css.button}>Add Contact</button>
    </form>
  );
};
