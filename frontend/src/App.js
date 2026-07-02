
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useTrips } from './hooks/useTrips';
import SearchBar from './components/SearchBar';
import TripList from './components/TripList';

function App() {
  const [query, setQuery] = useState('');
  const trips = useTrips(query);

  return (
    <div className="App">
      <div className="hero-banner">
        <h1>เที่ยวไหนดี</h1>
        <p>ค้นหาสถานที่ท่องเที่ยวที่ใช่สำหรับคุณ</p>
      </div>
      <div className="search-wrapper">
        <div className="container">
          <SearchBar query={query} onQueryChange={setQuery} />
        </div>
      </div>
      <div className="container">
        <TripList trips={trips} onTagClick={setQuery} />
      </div>
    </div>
  );
}

export default App;
