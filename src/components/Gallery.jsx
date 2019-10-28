import React from 'react';
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

export default Gallery;
