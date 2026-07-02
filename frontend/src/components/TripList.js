import React from 'react';
import TripCard from './TripCard';

function TripList({ trips, onTagClick }) {
  return (
    <>
      {trips.map(trip => (
        <TripCard key={trip.id} trip={trip} onTagClick={onTagClick} />
      ))}
    </>
  );
}

export default TripList;
