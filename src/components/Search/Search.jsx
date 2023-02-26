import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  Searchbox,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Search.styled';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');

    if (query.trim()=== '') {
        toast.warn(
          'Field cannot be empty!');
    };
  };

  const handlSearchChange = e => {
    const { value } = e.target;
    setQuery(value.trim());
    
  };
  return (
    <Searchbox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <FcSearch size={20} />
        </SearchFormBtn>

        <SearchFormInput
          value={query}
          onChange={handlSearchChange}
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </Searchbox>
  );
};
export default Search;

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};