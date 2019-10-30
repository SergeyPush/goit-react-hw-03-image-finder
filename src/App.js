import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import Loader from 'react-loader-spinner';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import Error from './components/Error';

import getImages from './services/pixabay';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles/styles.css';

const rootLoader = document.querySelector('#root-loader');
const rootModal = document.querySelector('#root-modal');

class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    searchQuery: '',
    error: null,
    selectedImage: null,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
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
    const height = document.body.offsetHeight;

    const { searchQuery, page } = this.state;
    this.setState({
      isLoading: true,
      loadMore: true,
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
          loadMore: false,
        });
        window.scrollTo({
          top: height,
          behavior: 'smooth',
        });
      });
  };

  onImageSelect = id => {
    this.setState({
      selectedImage: id,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const {
      photos,
      isLoading,
      selectedImage,
      error,
      searchQuery,
      loadMore,
    } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.onSubmit} />
        {error && <Error message={error} />}

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
        {selectedImage &&
          createPortal(
            <Modal image={selectedImage} closeModal={this.closeModal} />,
            rootModal,
          )}

        <Gallery photos={photos} onImageSelect={this.onImageSelect} />
        {photos.length === 0 && searchQuery.length !== 0 && !isLoading && (
          <Error message="Images not found" />
        )}
        {photos.length > 0 && (
          <button
            type="button"
            onClick={this.onLoadMore}
            className="button"
            disabled={loadMore}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default App;
