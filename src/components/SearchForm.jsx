import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({
      searchQuery: '',
    });

    this.props.onSubmit(this.state.searchQuery);
  };

  handleInputChange = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search images..."
            value={searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
