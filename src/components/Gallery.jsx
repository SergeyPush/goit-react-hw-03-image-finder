import React from 'react';
import PhotoCard from './PhotoCard';

const Gallery = props => {
  return (
    <ul className="gallery">
      {props.photos.map(item => (
        <PhotoCard key={item.id} photo={item} />
      ))}
    </ul>
  );
};

export default Gallery;
