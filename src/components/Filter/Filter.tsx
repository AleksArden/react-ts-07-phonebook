import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { filterAction } from 'redux/filter/filter.slice';
import { selectFilter } from 'redux/filter/filter.selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
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
