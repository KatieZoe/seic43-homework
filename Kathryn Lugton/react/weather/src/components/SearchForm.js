import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({ query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" onInput={this._handleInput} required placeholder="Haddington" />
        <input type="submit" value="Get Weather" />
      </form>
    )
  }
}
export default SearchForm;
