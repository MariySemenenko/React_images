import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from '../Styled.imafeFinder';

//тут вводю запит користувача

export const Searchbar = ({onHandleSubmit}) => {
  const [query, setQuery] = useState('');

  //при зміні значення в полі оновлюється стан query
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  //на сабміті форми перевіряю чи запит не є порожнім рядком
  const handleSubmit = e => {
    e.preventDefault();

    onHandleSubmit(query); //onHandleSubmit як пропс передається Searchbar
    setQuery(''); //очищаю query на порожній рядок після іншого запиту
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
