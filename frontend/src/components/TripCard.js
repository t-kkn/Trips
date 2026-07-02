import React from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

function TripCard({ trip, onTagClick }) {
  return (
    <div className="row mt-5">

      <div className="col-4 mt-2">
        {trip.photos.slice(0, 1).map((photo, i) => (
          <img key={i} src={photo} alt="" className="img-fluid rounded mx-auto d-block" />
        ))}
      </div>

      <div className="col-8">
        <div className="row ml-3">
          <h5><a href={trip.url}>{trip.title}</a></h5>
        </div>
        <div className="row ml-3">
          <ReactReadMoreReadLess charLimit={75} readMoreText={""} readLessText={""}>
            {trip.description}
          </ReactReadMoreReadLess>
          <a href={trip.url} className="ml-2">อ่านต่อ</a>
        </div>
        <div className="row ml-3 mt-1">
          หมวด :
          {trip.tags.map(tag => (
            <button
              key={tag}
              value={tag}
              onClick={event => onTagClick(event.target.value)}
              className="btn btn-outline-primary btn-sm ml-1"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="row mt-3">
          {trip.photos.slice(1, 4).map((photo, i) => (
            <img key={i} src={photo} alt="" className="img-fluid rounded mx-auto d-block w-25" />
          ))}
        </div>
      </div>

    </div>
  );
}

export default TripCard;
