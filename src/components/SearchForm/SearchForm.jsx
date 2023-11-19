import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hadleChange = e => {
    setQuery(e.target.value);
  };

  const hadleSubmit = e => {
    e.preventDefault();

    if (!query) {
      return alert('Введіть слово');
    }

    onSubmit(query);
  };

  return (
    <SearchFormStyled onSubmit={hadleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
        onChange={hadleChange}
      />
    </SearchFormStyled>
  );
};
