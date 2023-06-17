import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Divs } from '../Styled.imafeFinder';

//тут вводю запит користувача

export const Searchbar = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  //при зміні значення в полі оновлюється стан query
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  //на сабміті форми перевіряю чи запит не є порожнім рядком
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('не можна зробити запит');
    }

    onHandleSubmit(query); //onHandleSubmit як пропс передається Searchbar
    setQuery(''); //очищаю query на порожній рядок після іншого запиту
  };

  return (
    <Divs>
      <Form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
    </Divs>
  );
};

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
