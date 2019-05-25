import React from 'react';
import MasonryLayout from './MasonryLayout';
import { useMedia } from 'react-use-media';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
  const isMd = useMedia("(min-width: 768px)") ? true : false;

  return (
    <>
      <div className="content-description text-center destinations">
        <h3 className="title">Available destinations</h3>
      </div>
      <div className="masonry">
        <MasonryLayout/>
      </div>
    </>
  )
}

export default Destinations;