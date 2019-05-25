import React from 'react';
import MasonryLayout from './MasonryLayout';

const Destinations = () => {
  document.title = `TripXpert Destinations`;
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