import React from 'react';

function TripCard({ trip, onTagClick }) {
  return (
    <div className="card h-100 shadow-sm trip-card">
      {trip.photos[0] && (
        <img
          src={trip.photos[0]}
          alt={trip.title}
          className="card-img-top"
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <a href={trip.url} className="text-decoration-none text-dark">
            {trip.title}
          </a>
        </h5>
        <p className="card-text text-muted small flex-grow-1">
          {trip.description.length > 120
            ? trip.description.slice(0, 120) + '...'
            : trip.description}
        </p>
        <a href={trip.url} className="btn btn-sm btn-primary mt-2 align-self-start">
          อ่านต่อ →
        </a>
      </div>

      {trip.photos.length > 1 && (
        <div className="d-flex gap-1 px-3 pb-2">
          {trip.photos.slice(1, 4).map((photo, i) => (
            <img
              key={i}
              src={photo}
              alt=""
              className="rounded m-1"
              style={{ width: '60px', height: '45px', objectFit: 'cover' }}
            />
          ))}
        </div>
      )}

      <div className="card-footer bg-white border-top pt-2">
        <span className="text-muted small me-1">หมวด:</span>
        {trip.tags.map(tag => (
          <button
            key={tag}
            value={tag}
            onClick={event => onTagClick(event.target.value)}
            className="btn btn-outline-primary btn-sm m-1"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TripCard;
