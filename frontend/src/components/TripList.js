import React from 'react';
import TripCard from './TripCard';

function TripList({ trips, onTagClick }) {
  if (trips.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🗺️</div>
        <h5>ไม่พบสถานที่ท่องเที่ยวที่ตรงกัน</h5>
        <p className="text-muted">ลองค้นหาด้วยคำอื่น เช่น ทะเล ภูเขา หรือน้ำตก</p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {trips.map(trip => (
        <div className="col mb-3" key={trip.id}>
          <TripCard trip={trip} onTagClick={onTagClick} />
        </div>
      ))}
    </div>
  );
}

export default TripList;
