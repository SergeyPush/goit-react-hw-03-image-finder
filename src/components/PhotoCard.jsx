import React from 'react';

const PhotoCard = ({ photo }) => {
  const {
    // id,
    webformatURL,
    // largeImageURL,
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

        <button type="button" className="fullscreen-button">
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
