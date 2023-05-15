import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/filter/filter.slice';
import { selectFilter } from 'redux/filter/filter.selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filterAction(value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};
