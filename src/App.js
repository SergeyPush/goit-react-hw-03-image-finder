import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import Loader from 'react-loader-spinner';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';

import getImages from './services/pixabay';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles/styles.css';

const rootLoader = document.querySelector('#root-loader');

class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    searchQuery: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    // console.log('component did update');

    if (prevState.searchQuery !== searchQuery) {
      this.onLoadMore();
    }
  }

  onSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      photos: [],
    });
  };

  onLoadMore = () => {
    const { searchQuery, page } = this.state;
    this.setState({
      isLoading: true,
    });
    getImages(searchQuery, page)
      .then(response => {
        this.setState(state => ({
          photos: [...state.photos, ...response.data.hits],
          page: state.page + 1,
        }));
      })
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { photos, isLoading } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} />
        {createPortal(
          <Loader
            type="ThreeDots"
            color="#414141"
            height={100}
            width={100}
            className="loader"
            visible={isLoading}
          />,
          rootLoader,
        )}

        <Gallery photos={photos} />
        {photos.length > 0 && (
          <button type="button" onClick={this.onLoadMore} className="button">
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
