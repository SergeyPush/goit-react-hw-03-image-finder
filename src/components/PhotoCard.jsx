import React from 'react';
import T from 'prop-types';

const PhotoCard = ({ photo, onImageSelect }) => {
  const handleImageButton = image => {
    onImageSelect(image);
  };

  const {
    // id,
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
  } = photo;
  return (
    <div>
      <div className="photo-card">
        <img src={webformatURL} alt="" />

        <div className="stats">
          <p className="stats-item">
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className="stats-item">
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className="stats-item">
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className="stats-item">
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className="fullscreen-button"
          onClick={() => handleImageButton(largeImageURL)}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: T.shape({
    webformatURL: T.string.isRequired,
    largeImageURL: T.string.isRequired,
    likes: T.number.isRequired,
    views: T.number.isRequired,
    comments: T.number.isRequired,
    downloads: T.number.isRequired,
  }).isRequired,
  onImageSelect: T.func.isRequired,
};

export default PhotoCard;
