import React from 'react';
import T from 'prop-types';
import PhotoCard from './PhotoCard';

const Gallery = ({ photos, onImageSelect }) => {
  return (
    <ul className="gallery">
      {photos.map(item => (
        <PhotoCard key={item.id} photo={item} onImageSelect={onImageSelect} />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  photos: T.arrayOf(T.object.isRequired).isRequired,
  onImageSelect: T.func.isRequired,
};

export default Gallery;
