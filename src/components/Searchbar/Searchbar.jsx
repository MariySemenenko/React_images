import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from '../Styled.imafeFinder'

//тут вводю запит користувача

export class Searchbar extends Component {
  state = {
    query: '', //значення яке вводить користувач
  };

  //при зміні значення в полі оновлюється стан query
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  //на сабміті форми перевіряю чи запит не є порожнім рядком
  handleSubmit = e => {
   
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('не можна зробити запит');
    }
    this.props.onHandleSubmit(this.state.query); //onHandleSubmit як пропс передається Searchbar
    this.setState({ query: '' }); //очищаю query на порожній рядок після іншого запиту
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <input value={this.state.query} onChange={this.handleChange} />
          <Button type="submit">Search</Button>
        </Form>
      </>
    );
  }
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};